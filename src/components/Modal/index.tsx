import './styles.scss';

import MinusIcon from '../../icons/MinusIcon';
import PlusIcon from '../../icons/PlusIcon';
import Button from '../Button';
import { useModal } from '../../context/useModal';
import { useState } from 'react';
import { numberFormat } from '../../utils/NumberFormat';

const Modal = () => {
  const modal = useModal();

  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div className="modal" onClick={() => modal.toggleModal()}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="left-side">
          <img src={modal.currentProduct?.photo} alt="imagem-do-produto" />
        </div>
        <div className="right-side">
          <h3>{modal.currentProduct?.productName}</h3>
          <p className="price">
            {modal.currentProduct
              ? numberFormat(modal.currentProduct?.price / 100)
              : ''}
          </p>
          <p className="description">
            {modal.currentProduct?.descriptionShort}
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
