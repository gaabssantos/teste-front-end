import './styles.scss';

import ProductCategoryCard from '../ProductCategoryCard';

import Technology from '../../assets/icons/ProductCategory/Technology.svg';
import Supermarket from '../../assets/icons/ProductCategory/Supermarket.svg';
import Drinks from '../../assets/icons/ProductCategory/Drinks.svg';
import Tools from '../../assets/icons/ProductCategory/Tools.svg';
import Health from '../../assets/icons/ProductCategory/Health.svg';
import Sports from '../../assets/icons/ProductCategory/Sports.svg';
import Fashion from '../../assets/icons/ProductCategory/Fashion.svg';

const ProductCategory = () => {
  return (
    <div className="product-category">
      <ProductCategoryCard categoryName="Tecnologia" isActive>
        <img src={Technology} alt="icone-tecnologia" />
      </ProductCategoryCard>
      <ProductCategoryCard categoryName="Supermercado">
        <img src={Supermarket} alt="icone-supermercado" />
      </ProductCategoryCard>
      <ProductCategoryCard categoryName="Bebidas">
        <img src={Drinks} alt="icone-bebidas" />
      </ProductCategoryCard>
      <ProductCategoryCard categoryName="Ferramentas">
        <img src={Tools} alt="icone-ferramentas" />
      </ProductCategoryCard>
      <ProductCategoryCard categoryName="Saúde">
        <img src={Health} alt="icone-saude" />
      </ProductCategoryCard>
      <ProductCategoryCard categoryName="Esportes e Fitness">
        <img src={Sports} alt="icone-esportes-e-fitness" />
      </ProductCategoryCard>
      <ProductCategoryCard categoryName="Moda">
        <img src={Fashion} alt="icone-moda" />
      </ProductCategoryCard>
    </div>
  );
};

export default ProductCategory;
