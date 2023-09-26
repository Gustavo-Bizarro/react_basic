import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      {/*Css Global*/}
      <h1>React com CSS</h1>

      {/*Css de Componentes*/}
      <MyComponent/>
      <p>Esse paragráfo é do App.js</p>
      <p className="My_Comp_paragraph">Este também é do Componente</p>
      {/*Inline Css*/}

      <p style={{color: "gold", padding: "25px",  backgroundColor: "green", borderTop: "5px solid red" }}>Este elemento foi estilizado de forma inline</p>
    </div>
  );
}

export default App;
