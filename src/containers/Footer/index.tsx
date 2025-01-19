import './styles.scss';

import Logo from '../../assets/Logo.svg';
import InstagramIcon from '../../icons/InstagramIcon';
import FacebookIcon from '../../icons/FacebookIcon';
import LinkedinIcon from '../../icons/LinkedinIcon';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="main-content">
        <div className="left-side">
          <img src={Logo} alt="logo" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="social-media">
            <InstagramIcon />
            <FacebookIcon />
            <LinkedinIcon />
          </div>
        </div>
        <div className="right-side">
          <div className="institutional">
            <h4>Institucional</h4>
            <ul>
              <li>Sobre nós</li>
              <li>Movimento</li>
              <li>Trabalhe conosco</li>
            </ul>
          </div>
          <div className="help">
            <h4>Ajuda</h4>
            <ul>
              <li>Suporte</li>
              <li>Fale Conosco</li>
              <li>Perguntas Frequentes</li>
            </ul>
          </div>
          <div className="terms">
            <h4>Termos</h4>
            <ul>
              <li>Termos e Condições</li>
              <li>Política de Privacidade</li>
              <li>Troca e Devolução</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  );
};

export default Footer;
