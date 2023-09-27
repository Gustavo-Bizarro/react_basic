import './App.css';
import MyForm from './components/MyForm';


function App() {
  return (
    <div className="App">
     <h2>forms</h2>
    <MyForm user={{
        name: "Gustavo", 
        email: "gus.bizarro@gamil.com", 
        bio: "Sou um desenvolvedor", 
        role: "admin"
        }}/>
    </div>
  );
}

export default App;
