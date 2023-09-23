import { useState } from "react"
function ListRender() {

    const [list] = useState (["Gustavo", "Evelyn","Henrique", "Joaquim"]);
    const [users] = useState([
        {id:1, name: "Gustavo", age: 35},
        {id:54, name: "João", age: 32},
        {id:3, name: "Giberto", age: 46},
    ]);


  return (
    <div>
        <ul>
            {list.map((item,i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) =>(
            <li key={user.id}>{user.name} - {user.age}</li> ))}
        </ul>
    </div>
  )
}

export default ListRender