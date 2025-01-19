import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import RelatedProductsCategory from '../../components/RelatedProductsCategory';
import Subtitle from '../../components/Subtitle';
import ArrowIcon from '../../icons/ArrowIcon';
import './styles.scss';
import { numberFormat } from '../../utils/NumberFormat';
import { IProducts } from '../../interface/Products';

interface IProductsData {
  success: boolean;
  products: IProducts[];
}

type RelatedProductsProps = {
  isFirstSection?: boolean;
};

const RelatedProducts = ({ isFirstSection }: RelatedProductsProps) => {
  const [products, setProducts] = useState<IProducts[]>();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      fetch('/data/products.json').then(async (res) => {
        res.json().then((data: IProductsData) => {
          setProducts(data.products);
        });
      });
    };

    fetchProducts();
  });

  const goToPrevious = () => {
    if (products) {
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 2 : products?.length - 2,
      );
    }
  };

  const goToNext = () => {
    if (products) {
      setCurrentIndex((prevIndex) =>
        prevIndex < products.length - 4 ? prevIndex + 4 : 0,
      );
    }
  };

  return (
    <section className="related-products">
      <Subtitle>Produtos relacionados</Subtitle>
      {!isFirstSection ? <p>Ver todos</p> : <RelatedProductsCategory />}
      <div className="products">
        <ArrowIcon arrow="left" onClick={() => goToPrevious()} />
        <div className="carousel-track">
          {products
            ?.slice(currentIndex, currentIndex + 4)
            .map((product) => (
              <ProductCard
                productName={product.productName}
                oldPrice={numberFormat(product.price / 100 + 1000)}
                parcelPrice={numberFormat(product.price / 100 / 2)}
                price={product.price}
                photo={product.photo}
                descriptionShort={product.descriptionShort}
                key={product.productName}
              />
            ))}
        </div>
        <ArrowIcon arrow="right" onClick={() => goToNext()} />
      </div>
    </section>
  );
};

export default RelatedProducts;
