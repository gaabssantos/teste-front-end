import './styles.scss';

import ProductImage from '../../assets/ProductImage.svg';
import Button from '../Button';

const ProductCard = () => {
  return (
    <div className="product-card">
      <img src={ProductImage} alt="imagem-do-produto" />
      <p id="product-name">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <p id="old-price">R$ 30,90</p>
      <p id="current-price">R$ 28,90</p>
      <p id="parcel">ou 2x de R$ 49,95 sem juros</p>
      <p id="shipping">Frete grátis</p>
      <Button type="purple">Comprar</Button>
    </div>
  );
};

export default ProductCard;
