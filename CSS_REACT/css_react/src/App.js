import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';
import {useState} from 'react';

function App() {


  const n = 15;
  const [name] = useState("Joaquim")

  const redTitle = false


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

      {/* Css inline Dinamico*/}
      <h2 style={n < 10 ? ({color: "purple"}) : ({color:"black"})} >Este elemento foi estilizado de forma inline dinâmico</h2>

      <h2 style={n > 10 ? ({color: "purple"}) : ({color:"black"})} >Este elemento foi estilizado de forma inline dinâmico</h2>

      <h2 style={name === "g" ? ({color: "green", backgroundColor: "#000"}) : ({color:"gold"})} >Teste do nome</h2>

      {/*Teste dinâmica*/}
      <h2 className={redTitle === true ? ("red-title") : ("title")}>Este titulo irá ter classe dinâmica</h2>

      {/*CSS Module*/}
      <Title/>
      <h2 className='my_title'>Testando</h2>
    </div>
  );
}

export default App;
