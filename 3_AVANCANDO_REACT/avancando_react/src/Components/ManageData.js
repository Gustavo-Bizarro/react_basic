import {useState} from 'react'
function ManageData() {

    let someData = 10;
  
    const [number, setNumber] = useState(15);
  
    console.log(number)

  return (
    <div>
      <div>
               <div>
            <p>Valor: {someData}</p>
            <button onClick={() => someData = (15)}>Mudar variavel</button>
        </div>
        <div>
            <p>valor: {number}</p>
            <button onClick={() => setNumber(25)}>mudar o state</button>
        </div>
    </div>
    </div>
  )
}

export default ManageData