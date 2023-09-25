//Tenho que fazer o import da imagem para funcionar no assets
import City from './assets/city.jpg'
import gustavo from './assets/gustavo.png';

//Components
import ManageData from './Components/ManageData';
import ListRender from './Components/ListRender';
import CondicionalRender from './Components/CondicionalRender';

//props
import ShowName from './Components/ShowName';

//Destructuing
import CarDetails from './Components/CarDetails';
//import do css
import './App.css';
import { useState } from 'react';




function App() {

  {/*reutilização com loop*/}

  const cars = [
    {id: 1, brand: "Mercedez", color: "Vermelho", age: 2023, newCar: true, km: 0},
    {id: 2, brand: "Lamborguini", color: "Verde", age: 2022, newCar: false, km: 100},
    {id: 3, brand: "Ferrari", color: "Preta", age: 2021, newCar: false, km: 200}
  ]
  
  const [userName] = useState("Maria")
  return (
    <div className="App">
      <h1>Avançando no React</h1>
      {/*imagem em public*/}
      <div>
    <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/*colocar a imagem em assets*/}
      <div>
        <img src={City} alt="Cidade durante a noite" />
        <img src={gustavo} alt="Imagem do Gustavo" />

        <ManageData/>
        <ListRender/>
        <CondicionalRender/>

        {/*Props*/}z
        <ShowName name={userName}/>

        {/*Destructuring*/}
        <CarDetails brand="Nissan" km={75000} color="Prata Lunar" newCar={false}/>
        {/*Reaproveitamento*/}
        <CarDetails brand="VW" color="Vermelho" km={0} newCar={true}/>
        <CarDetails brand="Fiat" color="Laranja" km={50000} newCar={false}/>

        {/*Loop em array de objetos*/}
        {cars.map((car) => (
          <CarDetails 
          brand={car.brand} 
          color={car.brand}  
          km={car.km} 
          age={car.age}  
          newCar={car.newCar}
          />
        ))}

       </div>
    </div>
  );
}

export default App;
