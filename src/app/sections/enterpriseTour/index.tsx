import './styles.css'

interface EnterpriseTourProps{
    data:string
}

export default function EnterpriseTour({data}: EnterpriseTourProps) {

  return (
    data && <div className="enterprise-tour-container">
        <h3>Tour virtual</h3>
        {data.startsWith('http') ?
          <iframe src={data}></iframe>
        :
        <div dangerouslySetInnerHTML={{ __html: data }} />
      }
    </div>
  )
}
