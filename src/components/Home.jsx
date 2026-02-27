import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import postsData from '../generated/posts-data.js';
import config from '@config';
import './Home.css';

export default function Home() {
  useEffect(() => {
    document.title = config.title;
  }, []);

  const recentPosts = postsData.posts.slice(0, 3);

  return (
    <>
      <Navigation />
      <main className="home-content">
        <section className="home-hero">
          <h1>Welcome to {config.title}</h1>
          <p>{config.description}</p>
          <Link to="/blog" className="home-cta">Read the blog &rarr;</Link>
        </section>

        {recentPosts.length > 0 && (
          <section className="home-recent">
            <h2>Recent Posts</h2>
            <ul className="home-post-list">
              {recentPosts.map((post) => (
                <li key={post.slug}>
                  <span className="home-post-date">{post.date}</span>
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </li>
              ))}
            </ul>
            <Link to="/blog" className="home-all-link">All posts &rarr;</Link>
          </section>
        )}

        <Footer />
      </main>
    </>
  );
}
