import './styles.scss';

import FreeShippingIcon from '../../icons/FreeShippingIcon';
import PayIcon from '../../icons/PayIcon';
import SafePurchaseIcon from '../../icons/SafePurchaseIcon';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="benefit">
        <SafePurchaseIcon />
        <p>
          Compra <span className="highlight">100% segura</span>
        </p>
      </div>
      <div className="benefit">
        <FreeShippingIcon />
        <p>
          <span className="highlight">Frete grátis</span> acima de R$ 200
        </p>
      </div>
      <div className="benefit">
        <PayIcon />
        <p>
          <span className="highlight">Parcele</span> suas compras
        </p>
      </div>
    </div>
  );
};

export default TopBar;
