import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import PostCard from '../components/post-card';
import Layout from '../components/layout';
import Pagination from '../components/pagination';
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

  posts.forEach((post) => {
    items.push(<PostCard key={post.node.id} data={post}/>)
  });

  return (
    <div className="tags container">
      <header className="tags__header">
        <h1 className="tags__title title title--underline">{ total } post{ total === 1 ? '' : 's'} tagged : &quot;{tag}&quot;</h1>
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

  return (
    <div className="tags container">
      <header className="tags__header">
        <h1 className="tags__title title title--underline">View Posts By Tag</h1>
      </header>
      <div className="tags__tags">
        { nodes.map((tagName) => {
          return (
            <h2><Link className="btn btn--tag" to={`${category}/tags/${kebabCase(tagName)}`}>{tagName}</Link></h2>
          );
        })}
      </div>
    </div>
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