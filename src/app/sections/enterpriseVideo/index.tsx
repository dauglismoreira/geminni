import './styles.css'

interface EnterpriseVideoProps{
    enterprise:{
        video:string;
    }
}

export default function EnterpriseVideo({enterprise}: EnterpriseVideoProps) {

  return (
    <div className="enterprise-video-container">
        <h3>vídeos</h3>
        <div dangerouslySetInnerHTML={{ __html: enterprise.video }} />
    </div>
  )
}
