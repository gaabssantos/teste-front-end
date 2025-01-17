import './styles.scss';

import SafePurchase from '../../assets/icons/SafePurchase.svg';
import FreeShipping from '../../assets/icons/FreeShipping.svg';
import Pay from '../../assets/icons/Pay.svg';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="benefit">
        <img src={SafePurchase} alt="icone-compra-segura" />
        <p>
          Compra <span className="highlight">100% segura</span>
        </p>
      </div>
      <div className="benefit">
        <img src={FreeShipping} alt="icone-frete-gratis" />
        <p>
          <span className="highlight">Frete grátis</span> acima de R$ 200
        </p>
      </div>
      <div className="benefit">
        <img src={Pay} alt="icone-compra-segura" />
        <p>
          <span className="highlight">Parcele</span> suas compras
        </p>
      </div>
    </div>
  );
};

export default TopBar;
