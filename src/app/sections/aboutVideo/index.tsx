import './styles.css'

interface AboutVideoProps{
    iframeVideo:string;
}

export const AboutVideo = ({ iframeVideo }: AboutVideoProps) => (
    <div className="about-video">
      <div dangerouslySetInnerHTML={{ __html: iframeVideo }} />
    </div>
  );