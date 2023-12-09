import './styles.css'

interface EnterprisePlantProps{
    enterprise:{
        plant:string;
    }
}

export default function EnterprisePlant({enterprise}: EnterprisePlantProps) {

  return (
    <div className="enterprise-plant-container">
        <h3>Planta</h3>
        <img src={enterprise.plant}></img>
    </div>
  )
}