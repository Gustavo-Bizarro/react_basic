//Tenho que fazer o import da imagem para funcionar no assets
import City from './assets/city.jpg'
import gustavo from './assets/gustavo.png';

//Components
import ManageData from './Components/ManageData';
import ListRender from './Components/ListRender';
import CondicionalRender from './Components/CondicionalRender';

//import do css
import './App.css';




function App() {
  return (
    <div className="App">
      <h1>Avançando no React</h1>
      {/*imagem em public*/}
      <div>
    <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/*agora vou colocar a imagem em assets*/}
      <div>
        <img src={City} alt="Cidade durante a noite" />
        <img src={gustavo} alt="Imagem do Gustavo" />
        <ManageData/>
        <ListRender/>
        <CondicionalRender/>

      
      </div>
    </div>
  );
}

export default App;
