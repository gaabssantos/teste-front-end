import './styles.scss';

import ProductImage from '../../assets/ProductImage.svg';
import MinusIcon from '../../icons/MinusIcon';
import PlusIcon from '../../icons/PlusIcon';
import Button from '../Button';
import { useModal } from '../../context/useModal';
import { useState } from 'react';

const Modal = () => {
  const modal = useModal();

  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div className="modal" onClick={() => modal.toggleModal()}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
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
              <MinusIcon
                onClick={() => {
                  if (quantity > 1) {
                    setQuantity((prev) => prev - 1);
                  }
                }}
              />
              <p className="quantity">{quantity}</p>
              <PlusIcon onClick={() => setQuantity((prev) => (prev += 1))} />
            </div>
            <Button type="yellow">Comprar</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
