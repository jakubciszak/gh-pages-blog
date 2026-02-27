import { NavLink, Link } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-logo">My Blog</Link>
      <ul className="nav-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
      </ul>
    </nav>
  );
}
