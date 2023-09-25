import { useState } from "react"

const CondicionalRender = () => {
  const [x] = useState(false)
  const [name, setName] = useState("Gustavo")

  return (
    <div>
        <h1>isso Será Exibido?</h1>
        {x && <p>Se X for true, sim!</p> }
        {!x && <p>Se X for false, sim!</p> }

        <h1>If Ternário</h1>
      {name === "Gustavo" ? (
        <div>
         <p>Esse é o Gustavo</p>
        </div>
      ) : (
        <div>
           <p>Não tem registro.</p>
        </div>
      )}
      <button onClick={() => setName("João")}>clicar e confirme</button>
    </div>
  )
}

export default CondicionalRender