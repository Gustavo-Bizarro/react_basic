
function Container({children, myVelue}) {
  return (
    <div>
        <h2>Este é um titulo do Container</h2>
        {children}
        <p>Esse é o valor de: {myVelue}</p>

    </div>
  )
}

export default Container