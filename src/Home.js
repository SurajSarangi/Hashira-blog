import { useState } from 'react';

const Home = () =>{

	const [name, setName] = useState('rengoku');
	const [type, setType] = useState('flame');

	const handleClick = () =>{
		setName('shinazugawa');
		setType('wind');
	}

	return(
		<div className="home">
			<h2>Homepage</h2>
			<p>{name} is {type} hashira</p>
			<button onClick = {handleClick}>Click Me</button>
		</div>
	);
}

export default Home;