//Tenho que fazer o import da imagem para funcionar no assets
import City from './assets/city.jpg'
import gustavo from './assets/gustavo.png';

//import Rook useState
import { useState } from 'react';

//Components
import ManageData from './Components/ManageData';
import ListRender from './Components/ListRender';
import CondicionalRender from './Components/CondicionalRender';
import Fragments from './Components/Fragments';
import Container from './Components/Container';
import ExecuteFuncao from './Components/ExecuteFuncao';
import Message from './Components/Message';
import ChangeMessageState from './Components/ChangeMessageState';

//props
import ShowName from './Components/ShowName';

//Destructuing
import CarDetails from './Components/CarDetails';

//Desafio 4
import UserDetails from './Components/UserDetails';

//import do css
import './App.css';







function App() {

//Reutilizaçao com loop 

  const cars = [
    
    {id: 1, brand: "Mercedez", color: "Vermelho", age: 2023, newCar: true, km: 0},
    {id: 2, brand: "Lamborguini", color: "Verde", age: 2022, newCar: false, km: 100},
    {id: 3, brand: "Ferrari", color: "Preta", age: 2021, newCar: false, km: 200}
  ]

  function showMessage(){
    console.log("evento do componente pai")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }
  
  //desafio 4
  const users = [
    {id: 1, name:"Gustavo", idade: 16, profissão:"dev", sexo: "Masculino", nacionalidade: "brasileiro"},
    {id: 2, name:"Gilmar", idade: 18, profissão:"Professor" , sexo: "Masculino", nacionalidade: "espanho"},
    {id: 3, name:"Bianca", idade: 15, profissão:"Manicure", sexo: "feminino", nacionalidade: "argentino"},
    {id: 3, name:"Julia", idade: 19, profissão:"Empresária", sexo: "feminino", nacionalidade: "uruguaio"}
  ]

  //const name = "joaquim"
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
          key={car.id}
          brand={car.brand} 
          color={car.brand}  
          km={car.km} 
          age={car.age}  
          newCar={car.newCar}
          />        
        ))}

          <Fragments propFragment='Teste'/>

          {/*children*/}
          <Container myVelue="teste">
            <p>E este é um conteúdo</p>
            </Container>  

            <Container myVelue="teste 2">
            <p>testando o containar</p>
            </Container>

            {/*Executar função*/}
          <ExecuteFuncao myFuncao={showMessage} />

          {/*state lift*/}
          <Message msg={message}/>
          <ChangeMessageState handleMessage={handleMessage}/>

          {/*desafio 4*/}
         
          {users.map((user) =>(
             <UserDetails 
             key={user.id} 
             nome={user.name} 
             idade={user.idade} 
             profissão={user.profissão} 
             nacionalidade={user.nacionalidade} 
             sexo={user.sexo}/>
          ))}

         </div>
         
      </div>
  );
}

export default App;
