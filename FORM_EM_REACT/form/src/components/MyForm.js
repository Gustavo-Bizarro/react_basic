import './MyForm.css'
import {useState} from 'react'

const MyForm = (user) => {
  // 6 - Controlled do inputs
  // 3 - Gerenciamento de dados
  const [name, setName] = useState(user ? user.name : "")
  const [email, setEmail] = useState(user ? user.email : "")

  const [bio, setBio] = useState(user ? user.bio : "")

  const[ role, setRole]= useState(user ? user.role : "")

  const handleName = (event) => {
    setName(event.target.value)
  }
  //console.log(name)
  //console.log(email)
  //console.log(bio)
  //console.log(role)

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Enviando o formulário")
    console.log(name,email,bio,role)

    // 7 - Limpar forms depois de enviar o formulário

    setName("")
    setEmail("")
    setBio("")
    setRole("")
  }
  return (
    <div>
      {/* 5 - envio de form */}



        {/*Criação de form, onde a Label não envolve o input*/}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input 
                type="text" 
                name="name" 
                placeholder="Digite o seu nome" 
                onChange={handleName} 
                value={name} />
            </div>
            {/*Label envolvendo o inupt, sugerida pela documentação do REACT*/}
            <label>
              {/* 4 - simplificação de manipulação de state */}
              <span>E-mail</span>
              <input 
              type="email" 
              name="email" 
              placeholder="Digite seu E-mail" 
              onChange={(event) => setEmail(event.target.value)} 
              value={email}/>

            </label>
            {/* 8 - textarea */}

            <label>
              <span>Bio:</span>
            </label>
            <textarea name="bio" placeholder='Descrição do Usuário' onChange={(e) => setBio(e.target.value)} value={bio}></textarea>

            {/* 9 - select*/ }
<label>
  <span>Função no sistema</span>
    <select name="role" onChange={(e) => setRole(e.target.value)}>
      <option value="user">Usuário</option>
      <option value="editor">Editor</option>
      <option value="admin">Administrador</option>
    </select>
</label>

            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm