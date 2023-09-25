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
        <CarDetails brand="Nissan" km={0} color="Prata Lunar"/>


       </div>
    </div>
  );
}

export default App;
