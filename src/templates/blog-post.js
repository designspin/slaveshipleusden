import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout'
import Content, { HTMLContent } from '../components/content'
import kebabCase from 'lodash/kebabCase';

export const BlogPageQuery = graphql`
  query BlogPageQuery($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        templateKey
        title
        date(formatString: "DD MMMM, YYYY")
        tags
        description
        mainImage {
          childImageSharp {
              fluid(maxWidth: 1900) {
                  ...GatsbyImageSharpFluid
              }
              fixed(width: 1200, height: 630) {
                ...GatsbyImageSharpFixed
              }
          }
        }
      }
      fields {
        slug
        tagPaths
      }
    }
  }
`;

export const Tags = ({tags}) => {
  const TagsRender = () => tags.map((tag, index) => 
    <Link key={`${kebabCase(tag)}-${index}`} to={`/blog/tags/${kebabCase(tag)}/`} className="btn btn--tag">{tag}</Link> 
  );
  return (
    <span className="tags"><strong>Tagged:</strong> <TagsRender /></span>
  )
};

const BlogPostTemplate = ({ title, date, tags, content, contentComponent, mainImage }) => {
  const PostContent = contentComponent || Content;

  return (
    <article className="post">
      <div className="container">
        <header className="post__header">
          <Img
            className="post__featured"
            alt={title}
            sizes={mainImage} />
          <h1 className="post__title title title--underline">{title}</h1>
          <div className="post__meta">
            <span><strong>Posted On: </strong><time>{date}</time></span> 
            <Tags tags={tags}/>
          </div>
        </header>
        <PostContent content={content} />
      </div>
    </article>
  )
};

const BlogPost = ({ data }) => {
  const { post } = data;

  return (
    <Layout>
      <BlogPostTemplate
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        tags={post.frontmatter.tags}
        mainImage={post.frontmatter.mainImage.childImageSharp.fluid}
        content={post.html.replace('<p><div>', '<div>').replace('</div></p>', '</div>')}
        contentComponent={HTMLContent} />
    </Layout>
  )
};

export default BlogPost;