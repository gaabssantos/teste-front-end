import './styles.scss';

import ProductImage from '../../assets/ProductImage.svg';
import MinusIcon from '../../icons/MinusIcon';
import PlusIcon from '../../icons/PlusIcon';
import Button from '../Button';

const Modal = () => {
  return (
    <div className="modal">
      <div className="modal-box">
        <div className="left-side">
          <img src={ProductImage} alt="imagem-do-produto" />
        </div>
        <div className="right-side">
          <h3>LOREM IPSUM DOLOR SIT AMET</h3>
          <p className="price">R$ 1.499,90</p>
          <p className="description">
            Many desktop publishing packages and web page editors now many
            desktop publishing
          </p>
          <p className="see-more">Veja mais detalhes do produto {'>'}</p>
          <div className="actions">
            <div className="quantity-input">
              <MinusIcon />
              <p className="quantity">01</p>
              <PlusIcon />
            </div>
            <Button type="yellow">Comprar</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
