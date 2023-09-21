const TemplateExpress = () => {

    const nome = "Gustavo Bizarro"
    const date = {
        age: 46,
        job: "Programador",
    }

    return (
        <div>{/*Vai ser impresso na tela o valor da variavel nome*/}

            <h1>Olá {nome} tudo bem?</h1>
            <p>Você atua como {date.job}? e você tem {date.age} anos de idade?</p>
            <p>{8 + 8}</p>
            <p>{console.log("JSX REACT")}</p>

        </div>
    )

}

export default TemplateExpress;