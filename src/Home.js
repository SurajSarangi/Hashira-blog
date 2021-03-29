import { useState, useEffect } from 'react';
import BlogList from './BlogList';
const Home = () => {

	// eslint-disable-next-line no-unused-vars
	const [blogs, setBlogs] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);

	useEffect(()=>{
		setTimeout(()=>{
			fetch('http://localhost:5000/blogs')
			.then(res => {
				if (!res.ok) {
					throw Error('Could not fetch data from source');
				}
				return res.json();
			})
			.then(data => {
				setBlogs(data);
				setIsPending(false);
				setError(null);
			})
			.catch(err =>{
				setIsPending(false);
				setError(err.message);
			});
		}, 1000);
	},[]);

	return(
		<div className="home">
			{error && <div>error</div>}
			{isPending && <div>Loading...</div> }
			{blogs && <BlogList blogs={blogs} title="All Blogs"/>}
		</div>
	);
}

export default Home;