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
        author {
          frontmatter {
            author_id
            image {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
            bio
          }
        }
        date(formatString: "DD MMMM, YYYY")
        tags
        description
        mainImage {
          childImageSharp {
              fluid(maxWidth: 1900) {
                  ...GatsbyImageSharpFluid_withWebp
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

export const Author = ({ author_id: name, image, bio }) => {
  return (
    <section className="author">
      <Img
        className="author__image"
        alt={name}
        fixed={image.childImageSharp.fixed} />
      <h4 className="author__name">About {name}</h4>
      <div className="author__bio" style={{whiteSpace: 'pre-wrap'}}>{bio}</div>
    </section>
  )
}

const BlogPostTemplate = ({ title, date, tags, content, contentComponent, mainImage, author }) => {
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
        <Author {...author} />
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
        author={post.frontmatter.author.frontmatter}
        mainImage={post.frontmatter.mainImage.childImageSharp.fluid}
        content={post.html.replace('<p><div>', '<div>').replace('</div></p>', '</div>')}
        contentComponent={HTMLContent} />
    </Layout>
  )
};

export default BlogPost;