import './MyForm.css'
import {useState} from 'react'

const MyForm = () => {
  // 3 - Gerenciamento de dados
  const [name, setName] = useState()
  const [email, setEmail] = useState()

  const handleName = (event) => {
    setName(event.target.value)
  }
  console.log(name)
  console.log(email)

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enviando o formulário")
    console.log(name,email)
  }
  return (
    <div>
      {/* 5 - envio de form */}



        {/*Criação de form, onde a Label não envolve o input*/}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} />
            </div>
            {/*Label envolvendo o inupt, sugerida pela documentação do REACT*/}
            <label>
              {/* 4 - simplificação de manipulação de state */}
              <span>E-mail</span>
              <input type="email" name="email" placeholder="Digite seu E-mail" onChange={(event) => setEmail(event.target.value)}/>

            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm