import './styles.css'

interface EnterpriseTitleProps{
    enterprise:{
        title:string;
        city:string;
        type:string;
        high:string;
        details:{
            dorms:number;
            size:number;
            suite:number;
            garage:number;
            floor:number;
            bath:number;
        }
    }
}

export default function EnterpriseTitle({enterprise}: EnterpriseTitleProps) {

  return (
    <div className="enterprise-title-container">
        <h1>{enterprise.title}</h1>
        <h3 className="enterprise-high">
            <span>{enterprise.city}</span><span>·</span>
            <span>{enterprise.type}</span><span>·</span>
            <span className="high">{enterprise.high}</span>
        </h3>
        <div className="enterprise-details">
            <span>{enterprise.details.size} m²</span>
            <span>{enterprise.details.dorms} dormitórios</span>
            <span>{enterprise.details.suite} suíte</span>
            <span>{enterprise.details.garage} vagas</span>
            <span>{enterprise.details.floor}º andar</span>
            <span>{enterprise.details.bath} banheiros</span>
        </div>
    </div>
  )
}
