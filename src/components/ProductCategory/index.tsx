import './styles.scss';

import ProductCategoryCard from '../ProductCategoryCard';

import DrinksIcon from '../../icons/DrinksIcon';
import FashionIcon from '../../icons/FashionIcon';
import HealthIcon from '../../icons/HealthIcon';
import SportsIcon from '../../icons/SportsIcon';
import SupermarketIcon from '../../icons/SupermarketIcon';
import TechnologyIcon from '../../icons/TechnologyIcon';
import ToolsIcon from '../../icons/ToolsIcon';

const ProductCategory = () => {
  return (
    <div className="product-category">
      <ProductCategoryCard categoryName="Tecnologia" isActive>
        <TechnologyIcon />
      </ProductCategoryCard>
      <ProductCategoryCard categoryName="Supermercado">
        <SupermarketIcon />
      </ProductCategoryCard>
      <ProductCategoryCard categoryName="Bebidas">
        <DrinksIcon />
      </ProductCategoryCard>
      <ProductCategoryCard categoryName="Ferramentas">
        <ToolsIcon />
      </ProductCategoryCard>
      <ProductCategoryCard categoryName="Saúde">
        <HealthIcon />
      </ProductCategoryCard>
      <ProductCategoryCard categoryName="Esportes e Fitness">
        <SportsIcon />
      </ProductCategoryCard>
      <ProductCategoryCard categoryName="Moda">
        <FashionIcon />
      </ProductCategoryCard>
    </div>
  );
};

export default ProductCategory;
