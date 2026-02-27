import { NavLink, Link } from 'react-router-dom';
import config from '@config';
import './Navigation.css';

export default function Navigation() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-logo">{config.title}</Link>
      <ul className="nav-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
      </ul>
    </nav>
  );
}
