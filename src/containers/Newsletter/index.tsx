import Button from '../../components/Button';
import './styles.scss';

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter-text">
        <h3>Inscreva-se na nossa newsletter</h3>
        <p>
          Assine a nossa newsletter e receba as novidades e conteúdos exclusivos
          da Econverse.
        </p>
      </div>
      <div className="newletter-form">
        <div className="input-group">
          <div className="form-control">
            <input type="text" placeholder="Digite seu nome" />
          </div>
          <div className="form-control">
            <input type="text" placeholder="Digite seu e-mail" />
          </div>
          <Button type="yellow">Inscrever</Button>
        </div>
        <div className="terms">
          <input type="checkbox" />
          <span>Aceito os termos e condições</span>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
