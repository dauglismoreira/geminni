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
        {data.src.startsWith('http') ?
          <video width="320" height="240" controls>
            <source src={data.src} type="video/mp4"></source>
          </video>
        :
        <div dangerouslySetInnerHTML={{ __html: data.src }} />
        }
    </div>
  )
}