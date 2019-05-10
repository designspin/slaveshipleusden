import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import PostCard from '../components/post-card';
import Layout from '../components/layout';
import Pagination from '../components/pagination';
import Seo from '../components/seo';
import { kebabCase } from 'lodash';

export const TagQuery = graphql`
  query TagPage($nodes: [String]) {
    posts: allMarkdownRemark(
      filter: { fields: { ids: { in: $nodes } } },
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
            date(formatString: "DD MMMM, YYYY") 
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

const TagTemplate = (props) => {
  const { tag, page, pages, prev, next, total } = props.pageContext;
  const items = [];
  const posts = props.data.posts.edges;
  let pageText = "";

  posts.forEach((post) => {
    items.push(<PostCard key={post.node.id} data={post}/>)
  });

  if(pages > 1) {
    pageText = ` - Page ${page} of ${pages}`;
  }

  return (
    <div className="tags container">
      <header className="tags__header">
        <h1 className="tags__title title title--underline">{ total } post{ total === 1 ? '' : 's'} tagged : &quot;{tag}&quot;{pageText}</h1>
        <h2><Link className="btn btn--tag" to="/blog/">View All Posts</Link></h2>
      </header>
      <div className="tags__posts">
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
}

const TagsTemplate = (props) => {
  const { category, nodes, page, pages, prev, next, total } = props.pageContext;

  let pageText = "";

  if(pages > 1) {
    pageText = ` - Page ${page} of ${pages}`;
  }

  return (
    <>
    <Seo
      title={`View Posts By Tags`} 
      description={`Read posts by tag name from the Slave Ship Leusden blog`} 
      location={props.location.path} />
    <div className="tags container">
      <header className="tags__header">
        <h1 className="tags__title title title--underline">View Posts By Tag{pageText}</h1>
        <strong><Link className="btn btn--tag" to="/blog/">View All Posts</Link></strong>
      </header>
      <div className="tags__tags">
        <h2>Tags: </h2>
        { nodes.map((tagName) => {
          return (
            <h4 key={`${category}/tags/${kebabCase(tagName)}`}><Link className="btn btn--tag" to={`/${category}/tags/${kebabCase(tagName)}`}>{tagName}</Link></h4>
          );
        })}
      </div>
    </div>
    </>
  )
}

const TagPage = (props) => {
  const { tag, category } = props.pageContext;
  const { meta } = props.data;

  if(tag) {
    return (
      <Layout>
        <TagTemplate {...props} />
      </Layout>
    )
  } else {
    return (
      <Layout>
        <TagsTemplate {...props} />
      </Layout>
    )
  }
};

export default TagPage;