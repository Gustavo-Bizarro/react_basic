import React from 'react'

function ShowName(props) {
  return (
    <div>
        <h2>O nome do usuário: {props.name} </h2>
    </div>
  )
}

export default ShowName