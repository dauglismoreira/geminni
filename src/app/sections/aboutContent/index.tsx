import './styles.css';

interface AboutBannerProps {
    content:string;
}

export const AboutContent = ({ content }:AboutBannerProps ) => (
  <div className="about-content">
    <div className="vertical-line"></div>
    <div className="about-text">
      <div dangerouslySetInnerHTML={{ __html: content || '' }} />
    </div>
  </div>
);