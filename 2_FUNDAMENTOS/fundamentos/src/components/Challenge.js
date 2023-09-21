const Challenge = () => {

    const n2 = 3;
    const n1 = 1;
    return (
        <div>
            <h2>os valores das variaveis são: {n1} e {n2}</h2>
            <div>
                <button onClick={() => console.log (n1+n2)}>somar os valores</button>
                
            </div>
        </div>
    )
}

export default Challenge;