import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import Content, { HTMLContent } from '../components/content';
import Seo from '../components/seo';
import Share from '../components/share';
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
                ...GatsbyImageSharpFixed_withWebp
              }
          }
        }
      }
      fields {
        slug
        tagPaths
      }
    }
    site {
      siteMetadata {
        siteUrl
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

const BlogPostTemplate = ({ title, date, tags, content, contentComponent, mainImage, author, description, location, ...props }) => {
  const PostContent = contentComponent || Content;

  return (
    <>
    <Seo
      title={title}  
      description={description}
      location={location.pathname} 
      shareimage={mainImage.fixed.src} />
    <article className="post">
      <div className="container">
        <header className="post__header">
          <Img
            className="post__featured"
            alt={title}
            sizes={mainImage.fluid} />
          <h1 className="post__title title title--underline">{title}</h1>
          <div className="post__meta">
            <span><strong>Posted On: </strong><time>{date}</time></span> 
            <Tags tags={tags}/>
          </div>
        </header>
        <PostContent content={content} />
        <footer>
          <div style={{ textAlign: 'center', marginTop: '4em'}}><Share url={props.data.site.siteMetadata.siteUrl + location.pathname} text={`Share This: `} /></div>
          <Author {...author} />
        </footer>
      </div>
    </article>
    </>
  )
};

const BlogPost = (props) => {
  const { data } = props;
  const { post } = data;
  
  return (
    <Layout>
      <BlogPostTemplate
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        date={post.frontmatter.date}
        tags={post.frontmatter.tags}
        author={post.frontmatter.author.frontmatter}
        mainImage={post.frontmatter.mainImage.childImageSharp}
        content={post.html.replace('<p><div>', '<div>').replace('</div></p>', '</div>')}
        contentComponent={HTMLContent} {...props}/>
    </Layout>
  )
};

export default BlogPost;