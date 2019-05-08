const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const remark = require('remark');
const remarkHTML = require('remark-html');
const { createPaginationPages } = require('gatsby-pagination');
const _ = require('lodash');

const createBlogPages = (createPage, posts) => {
    posts.forEach((post) => {
        createPage({
            path: post.fields.slug,
            component: path.resolve(
                `src/templates/${String(post.frontmatter.templateKey)}.js`
            ),
            context: { id: post.id }
        });
    });
};

const createCategoryPages = (createPage, posts) => {
    const category = 'blog';
    const postIds = posts.map((post) => {
        return post.id;
    });

    createPaginationPages({
        createPage,
        pathFormatter: path => `/${_.kebabCase(category)}${path !== 1 ? '/' + path : '/'}`,
        component: path.resolve(`src/templates/blog.js`),
        limit: 12,
        edges: postIds,
        context: { category }
    })
};

const createTagPages = (createPage, tags) => {
    const category = 'blog';
    let allTags = [];

    Object.keys(tags).forEach((tag) => {
        allTags.push(tag);
        const postIds = tags[tag];
        createPaginationPages({
            createPage,
            pathFormatter: path => `/blog/tags/${_.kebabCase(tag)}${path !== 1 ? '/' + path : '/'}`,
            component: path.resolve(`src/templates/tagged.js`),
            limit: 50,
            edges: postIds,
            context: {
                category,
                tag
            }
        })
    });

    allTags = _.uniq(allTags).sort();
    createPaginationPages({
        createPage,
        edges: allTags,
        component: path.resolve(`src/templates/tagged.js`),
        limit: 20,
        context: { category },
        pathFormatter: path => `/blog/tags${path !== 1 ? '/' + path : '/'}`
    })
};

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions;

    return graphql(`
        {
            blog: allMarkdownRemark(
                limit: 1000
            ) {
                edges {
                    node {
                        id
                        fields {
                            slug
                        }
                        frontmatter {
                            tags
                            templateKey
                        }
                    }
                }
            }
        }
    `).then(result => {
        if(result.errors) {
            result.errors.forEach(e => console.error(e.toString()));
            return Promise.reject(results.errors);
        }
        
        const blogs = result.data.blog.edges;
        let blogObject = {
            posts: [],
            tags: []
        }

        //Create blog pages
        blogs.forEach(({ node }) => {
            const { tags, templateKey } = node.frontmatter;
            const { id: postId } = node;
            
            

            if(templateKey !== 'blog-post') { return; }
            blogObject.posts.push(node);
            if(tags) {
                tags.forEach((tag) => {
                    if(tag && tag !== '') {
                        if(!blogObject.tags[tag]) {
                            blogObject.tags[tag] = [];
                        }
                        blogObject.tags[tag].push(postId);
                    }
                })
            }
        });
        
        createBlogPages(createPage, blogObject.posts);
        createCategoryPages(createPage, blogObject.posts);
        createTagPages(createPage, blogObject.tags);
    });
}

/*exports.sourceNodes = ({ boundActionCreators, getNodes, getNode }) => {
    const { createNodeField } = boundActionCreators;

    const authorsOfBlogs = {};

    const getAuthorNodeByName = name => getNodes().find(
        node2 =>
            node2.internal.type === 'MardownRemark' &&
            node2.frontmatter.author_id === name
    );

    const markdownNodes = getNodes()
        .filter(node => node.internal.type === 'MarkdownRemark')
        .forEach(node => {
            if(node.frontmatter.author) {
                const authorNodes = node.frontmatter.author instanceof Array
                    ? node.frontmatter.author.map(getAuthorNodeByName)
                    : [getAuthorNodeByName(node.frontmatter.author)]
                
                authorNodes.filter(authorNode => authorNode).map(authorNode => {
                    if(!(node.id in authorsOfBlogs)) {
                        authorsOfBlogs[node.id] = []
                    }

                    authorsOfBlogs[node.id].push(authorNode.id)
                })
            }
        })
    
    Object.entries(authorsOfBlogs).forEach((blogNodeId, authorIds)) => {
        createNodeField({
            node: getNode(blogNodeId),
            name: 'authors',
            value: authorIds
        })
    })
}*/

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;
    
    if(node.internal.type === 'MarkdownRemark') {
        const value = createFilePath({ node, getNode});
        
        createNodeField({
            name: `slug`,
            node,
            value,
        });

        if(node.frontmatter.templateKey === "blog-post") {
            createNodeField({
                name: 'ids',
                node,
                value: [node.id]
            })

            createNodeField({
                name: 'categoryPath',
                node,
                value: 'blog',

            })

            if(node.frontmatter.tags) {
                const tagPaths = node.frontmatter.tags.map(tag => `/tags/${_.kebabCase(tag)}/`);
                createNodeField({
                    name: 'tagPaths',
                    node,
                    value: tagPaths
                })
            }
        }
    }

    if(node.frontmatter !== undefined && node.frontmatter.sections !== undefined) {

        node.frontmatter.sections.forEach((section, index) => {
            const markdown = section.body;
            node.frontmatter.sections[index].body = remark()
            .use(remarkHTML)
            .processSync(markdown)
            .toString();
        });

        return node;
    }
}

