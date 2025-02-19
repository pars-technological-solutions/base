import { Construction } from 'lucide-react';
import './main.css';

const UnderConstruction = () => (
  <div className="construction-container">
    <div className="construction-card">
      <div className="icon-container">
        <Construction className="construction-icon" />
      </div>

      <h1 className="title">
        Sitemiz Yapım Aşamasında
      </h1>

      <p className="description">
        Daha iyi bir deneyim sunmak için çalışıyoruz. Çok yakında sizlerle olacağız!
      </p>


      <div className="contact-section">
        <p className="contact-text">
          Sorularınız için:
        </p>
        <a
          href="mailto: info@parstechsolutions.com"
          className="email-link"
        >
          info@parstechsolutions.com
        </a>
      </div>
    </div>
  </div>
);

export default UnderConstruction;
