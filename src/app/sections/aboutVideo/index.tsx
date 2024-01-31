import './styles.css'

interface AboutVideoProps{
    iframeVideo:string;
}

export const AboutVideo = ({ iframeVideo }: AboutVideoProps) => (
    <div className="about-video">
      {iframeVideo.startsWith('http') ?
        <video width="320" height="240" controls>
          <source src={iframeVideo} type="video/mp4"></source>
        </video>
      :
      <div dangerouslySetInnerHTML={{ __html: iframeVideo }} />
      }
    </div>
  );