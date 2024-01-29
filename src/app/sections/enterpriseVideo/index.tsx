import './styles.css'

interface EnterpriseVideoProps{
    data:{
        src:string;
    }
}

export default function EnterpriseVideo({data}: EnterpriseVideoProps) {

  return (
    data && <div className="enterprise-video-container">
        <h3>vídeos</h3>
        <div dangerouslySetInnerHTML={{ __html: data.src }} />
    </div>
  )
}
