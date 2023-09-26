import style from'./TopCar.module.css';

const TopCar = ({car}) => {
  return (
    <div className={style.card}>
        <h1>{car.brand}</h1>
        <h1>Cor: {car.color}</h1>
        <h1>Ano: {car.age}</h1>
        
    </div>
  )
}

export default TopCar