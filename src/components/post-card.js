import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { Tags } from '../templates/blog-post';

const PostCard = (props) => {
  const {node: post} = props.data;
  return (
    <article className="post-card">
      <header className="post-card__header">
        <Link to={post.fields.slug} className="post-card__link">
          <Img
            className="post-card__image"
            alt={post.frontmatter.title}
            fixed={post.frontmatter.mainImage.childImageSharp.fixed} />
        </Link>
        <h3 className="post-card__title"><Link to={post.fields.slug}>{post.frontmatter.title}</Link></h3>
        <div className="post-card__meta">
          <span><strong>Posted On:</strong> <time>{post.frontmatter.date}</time></span>
          <Tags tags={post.frontmatter.tags}/>
        </div>
      </header>
      <div className="post-card__excerpt">
        <p>{post.excerpt}</p>
      </div>
      <footer className="post-card__footer">
        <Link to={post.fields.slug} className="btn">Read More</Link>
      </footer>
    </article>
  )
}

export default PostCard;