import ProductCard from '../../components/ProductCard';
import RelatedProductsCategory from '../../components/RelatedProductsCategory';
import Subtitle from '../../components/Subtitle';
import ArrowIcon from '../../icons/ArrowIcon';
import './styles.scss';

type RelatedProductsProps = {
  isFirstSection?: boolean;
};

const RelatedProducts = ({ isFirstSection }: RelatedProductsProps) => {
  return (
    <section className="related-products">
      <Subtitle>Produtos relacionados</Subtitle>
      {!isFirstSection ? <p>Ver todos</p> : <RelatedProductsCategory />}
      <div className="products">
        <ArrowIcon arrow="left" />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ArrowIcon arrow="right" />
      </div>
    </section>
  );
};

export default RelatedProducts;
