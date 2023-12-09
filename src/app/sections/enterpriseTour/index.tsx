import './styles.css'

interface EnterpriseTourProps{
    enterprise:{
        tour:string;
    }
}

export default function EnterpriseTour({enterprise}: EnterpriseTourProps) {

  return (
    <div className="enterprise-tour-container">
        <h3>Tour virtual</h3>
        <div dangerouslySetInnerHTML={{ __html: enterprise.tour }} />
    </div>
  )
}
