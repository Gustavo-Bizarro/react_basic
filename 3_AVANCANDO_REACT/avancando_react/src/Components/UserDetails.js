import React from "react"

const UserDetails = ({nome, idade, profissão, sexo, nacionalidade}) => {
  return (
    <div>
        <h2>{nome}</h2>
        <p>tenho: {idade}</p>
        <p>trabalho como: {profissão}</p>
        <p>Me reconheço como: {sexo}</p>
        <p>Sou natural de: {nacionalidade}</p>

        {idade >= 18 ?(<p><strong>Posso tirar minha habilitaçã</strong>o</p>) : (<p><strong>Ainda sou de menor de idade e não posso ter habilitação de motorista</strong></p>)}
    </div>
  )
}

export default UserDetails