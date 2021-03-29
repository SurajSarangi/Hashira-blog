import { useState, useEffect } from 'react';
import BlogList from './BlogList';
const Home = () => {

	// eslint-disable-next-line no-unused-vars
	const [blogs, setBlogs] = useState(null);
	const [isPending, setIsPending] = useState(true);

	useEffect(()=>{
		setTimeout(()=>{
			fetch('http://localhost:5000/blogs')
			.then(res => {
				return res.json();
			})
			.then(data => {
				setBlogs(data);
				setIsPending(false);
			})
		}, 1000);
	},[]);

	return(
		<div className="home">
			{isPending && <div>Loading...</div> }
			{blogs && <BlogList blogs={blogs} title="All Blogs"/>}
		</div>
	);
}

export default Home;