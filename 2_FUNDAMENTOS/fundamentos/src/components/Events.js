const Events = () => {

    const handleMyEvent = (event) => {
        console.log(event)
        console.log("ativou o evento!")
     };

     const renderSomething = (x) => {
      if(x){

        return <h1>Renderizando isso!</h1>
      } else {
        return <h1>Também posso renderizar isso!</h1>
      } 
     }
    
    return (

        <div>
            <div>
                <button onClick={handleMyEvent}>Click aqui!</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou")}>click buttom in line</button>
                <button onClick={() =>{
                    if(true){
                        console.log("isso não deveria estar acontecendo")
                    }
                }}>Click aqui por favor.</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events;