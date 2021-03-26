import logo from './logo.svg';
import './App.css';

function App() {
	const title = "Welcome to dojo blog";
	const num = 50;
  return (
    <div className="App">
      
      <div className="content">
          <h1>{ title }</h1>
          <p>Liked { num } times</p>
      </div>
    </div>
  );
}

export default App;
