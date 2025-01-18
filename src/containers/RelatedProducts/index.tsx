import ProductCard from '../../components/ProductCard';
import RelatedProductsCategory from '../../components/RelatedProductsCategory';
import ArrowIcon from '../../icons/ArrowIcon';
import './styles.scss';

const RelatedProducts = () => {
  return (
    <section className="related-products">
      <h2>Produtos relacionados</h2>
      <RelatedProductsCategory />
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
