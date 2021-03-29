import { useState, useEffect } from 'react';
import BlogList from './BlogList';
const Home = () => {

	// eslint-disable-next-line no-unused-vars
	const [blogs, setBlogs] = useState(null);

	useEffect(()=>{
		fetch('http://localhost:5000/blogs')
			.then(res => {
				return res.json();
			})
			.then(data => {
				setBlogs(data);
			})
	},[]);

	return(
		<div className="home">
			{blogs && <BlogList blogs={blogs} title="All Blogs"/>}
		</div>
	);
}

export default Home;