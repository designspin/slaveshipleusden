import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import PostCard from '../components/post-card';
import Pagination from '../components/pagination';

export const CategoryQuery = graphql`
  query CategoryQuery($nodes: [String]) {
    post: allMarkdownRemark(
      filter: { fields: {ids: { in: $nodes } } },
      sort: { order: DESC, fields: [frontmatter___date]}
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          fields {
            slug
            categoryPath
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            tags
            description
            mainImage {
              childImageSharp {
                fixed(width: 456, height: 240) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`;

const BlogCatTemplate = (props) => {
  const { category, page, prev, next, pages, total } = props.pageContext;
  const posts = props.posts;
  const items = [];

  posts.forEach((post) => {
    items.push(<PostCard key={post.node.id} data={post}/>)
  });

  return (
    <div className="posts container">
      <header className="posts__header">
        <h1 className="posts__title title title--underline">{ total } Blog Post{ total === 1 ? '' : 's'} - Page { page } of { pages}</h1>
      </header>
      <div className="posts__posts">
      { items }
      </div>
      <Pagination
        page={page}
        pages={pages}
        prev={prev}
        next={next}
        total={total}
        prevText="Prev"
        nextText="Next" />
    </div>
  );
};

const BlogCat = (props) => {
  const { data } = props;
  const post = props.data.post.edges;
  
  return (
    <Layout>
      <BlogCatTemplate posts={post} {...props} />
    </Layout>
  )
};

export default BlogCat;