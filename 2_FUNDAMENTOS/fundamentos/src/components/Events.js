const Events = () => {

    const handleMyEvent = (event) => {
        console.log(event)
        console.log("ativou o evento!")
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
        </div>
    )
}

export default Events;