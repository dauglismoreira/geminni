import {terms} from './mock';
import './styles.css'

export default function Terms() {
  return (
    <main>
      <div className="terms-container">
        <div className="terms-title">
          <h3>{terms.title}</h3>
        </div>
        <div className="terms-content">
          <div dangerouslySetInnerHTML={{ __html: terms.content }} />
        </div>
      </div>
    </main>
  )
}
