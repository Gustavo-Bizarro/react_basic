import { useState } from "react"
function ListRender() {

    const [list] = useState (["Gustavo", "Evelyn","Henrique", "Joaquim"]);
    const [users, setUsers] = useState([
        {id:1, name: "Gustavo", age: 35},
        {id:2, name: "João", age: 32},
        {id:3, name: "Giberto", age: 46},
    ]);

    const deleteRendom = () => {
        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)

        })

    }

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
        <button onClick={deleteRendom}>Delete random user</button>
    </div>
  )
}

export default ListRender