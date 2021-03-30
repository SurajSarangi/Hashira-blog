import { Link } from 'react-router-dom';

const Navbar = () => {
	return(
		<nav className="navbar">
			<h1>The Hashira blog</h1>
			<div className="links">
				<Link to="/">Home</Link>
				<Link to="/create" id="new">New Blog</Link>
			</div>
		</nav>
	);
}

export default Navbar;