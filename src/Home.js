import { useState, useEffect } from 'react';
import BlogList from './BlogList';
const Home = () => {

	// eslint-disable-next-line no-unused-vars
	const [blogs, setBlogs] = useState([
		{ title: 'Wind Hashira', body: 'lorem ipsum...', author: 'Shinazugawa', id: 1 },
    	{ title: 'Flame Hashira', body: 'lorem ipsum...', author: 'Rengoku', id: 2 },
    	{ title: 'Water Hashira', body: 'lorem ipsum...', author: 'Tomioka', id: 3 }
	]);

	const handleDelete = (id) =>{
		const newBlogs = blogs.filter((item) => item.id !== id)
		setBlogs(newBlogs);
	}

	useEffect(()=>{
		console.log("use effect ran");
	})

	return(
		<div className="home">
			<BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
		</div>
	);
}

export default Home;