import { useState } from 'react';
import BlogList from './BlogList';
const Home = () => {

	// eslint-disable-next-line no-unused-vars
	const [blogs, setBlogs] = useState([
		{ title: 'Wind Hashira', body: 'lorem ipsum...', author: 'Shinazugawa', id: 1 },
    	{ title: 'Flame Hashira', body: 'lorem ipsum...', author: 'Rengoku', id: 2 },
    	{ title: 'Water Hashira', body: 'lorem ipsum...', author: 'Tomioka', id: 3 }
	]);

	return(
		<div className="home">
			<BlogList blogs={blogs} title="All Blogs"/>
		</div>
	);
}

export default Home;