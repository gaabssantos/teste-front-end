import './styles.scss';

import Button from '../Button';
import { useModal } from '../../context/useModal';
import { numberFormat } from '../../utils/NumberFormat';

type ProductCardProps = {
  productName: string;
  oldPrice: string;
  price: number;
  parcelPrice: string;
  photo: string;
  descriptionShort: string;
};

const ProductCard = ({
  productName,
  oldPrice,
  price,
  parcelPrice,
  photo,
  descriptionShort,
}: ProductCardProps) => {
  const modal = useModal();

  return (
    <div className="product-card">
      <img src={photo} alt="imagem-do-produto" />
      <p id="product-name">{productName}</p>
      <p id="old-price">{oldPrice}</p>
      <p id="current-price">{numberFormat(price / 100)}</p>
      <p id="parcel">ou 2x de {parcelPrice} sem juros</p>
      <p id="shipping">Frete grátis</p>
      <Button
        type="purple"
        onClick={() => {
          modal.toggleModal();
          modal.setCurrentProduct({
            productName,
            descriptionShort,
            price,
            photo,
          });
        }}
      >
        Comprar
      </Button>
    </div>
  );
};

export default ProductCard;
