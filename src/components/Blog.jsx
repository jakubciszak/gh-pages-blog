import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import postsData from '../generated/posts-data.js';
import config from '@config';
import './Blog.css';

export default function Blog() {
  const [activeTags, setActiveTags] = useState(new Set());

  useEffect(() => {
    document.title = `Blog — ${config.title}`;
  }, []);

  const { posts, allTags } = postsData;

  const toggleTag = (tag) => {
    setActiveTags((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) {
        next.delete(tag);
      } else {
        next.add(tag);
      }
      return next;
    });
  };

  const filteredPosts = useMemo(() => {
    if (activeTags.size === 0) return posts;
    return posts.filter((post) => post.tags.some((t) => activeTags.has(t)));
  }, [posts, activeTags]);

  return (
    <>
      <Navigation />
      <div className="content">
        <div className="blog-header">
          <h1>Blog</h1>
        </div>

        {allTags.length > 0 && (
          <div className="tag-filter-bar">
            {allTags.map((tag) => (
              <button
                key={tag}
                className={`tag-filter-btn${activeTags.has(tag) ? ' active' : ''}`}
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        <div className="post-list">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              className="post-card"
              to={`/blog/${post.slug}`}
            >
              <div className="post-card-date">{post.date}</div>
              <div className="post-card-title">{post.title}</div>
              {post.tags.length > 0 && (
                <div className="post-card-tags">
                  {post.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              )}
              {post.excerpt && (
                <div className="post-card-excerpt">{post.excerpt}</div>
              )}
            </Link>
          ))}

          {filteredPosts.length === 0 && activeTags.size > 0 && (
            <div className="empty-state">No posts found for the selected tags.</div>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
}
