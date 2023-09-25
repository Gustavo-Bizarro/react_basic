

function CarDetails({brand, km, color, age, newCar}) {
  return (
    <div>
        <h2>Detalhes do carro:</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>Km: {km}</li>
            <li>Cor: {color}</li>
            <li>Ano: {age}</li>
        </ul>
        {newCar && <p>Este carro é novo!</p>}
    </div>
  )
}

export default CarDetails