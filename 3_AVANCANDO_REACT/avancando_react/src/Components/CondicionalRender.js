import { useState } from "react"

const CondicionalRender = () => {
    const [x] = useState(false)
  return (
    <div>
        <h1>isso Será Exibido?</h1>
        {x && <p>Se X for true, sim!</p> }
        {!x && <p>Se X for false, sim!</p> }
    </div>
  )
}

export default CondicionalRender