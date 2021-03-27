import { useState } from 'react';

const Home = () => {

	// eslint-disable-next-line no-unused-vars
	const [blogs, setBlogs] = useState([
		{ title: 'Wind Hashira', body: 'lorem ipsum...', author: 'Shinazugawa', id: 1 },
    	{ title: 'Flame Hashira', body: 'lorem ipsum...', author: 'Rengoku', id: 2 },
    	{ title: 'Water Hashira', body: 'lorem ipsum...', author: 'Tomioka', id: 3 }
	]);

	return(
		<div className="home">
			{blogs.map(blog => (
				<div className="blog-preview" key={blog.id}>
					<h2>{blog.title}</h2>
					<p>Written by <span>{blog.author}</span></p>
				</div>
			))}
		</div>
	);
}

export default Home;