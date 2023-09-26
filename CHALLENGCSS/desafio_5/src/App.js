
import './App.css';
import TopCar from './Component.js/TopCar';

function App() {
  const car = [
    
    {id: 1, brand: "Mercedez", color: "Vermelho", age: 2023,},
    {id: 2, brand: "Lamborguini", color: "Verde", age: 2022,},
    {id: 3, brand: "Ferrari", color: "Preta", age: 2021,}
  ]
  return (
    <div className="App">
     <h1>Desafio 5 em CSS</h1>
     <div className="div car-container">
      {car.map((car) => (<TopCar car={car}/>))}
     </div>
    </div>
  );
}

export default App;
