import BrandCard from '../../components/BrandCard';
import Subtitle from '../../components/Subtitle';

import './styles.scss';

const Brands = () => {
  return (
    <section className="brands">
      <Subtitle>Navegue por marcas</Subtitle>
      <div className="brands-container">
        <BrandCard />
        <BrandCard />
        <BrandCard />
        <BrandCard />
        <BrandCard />
      </div>
    </section>
  );
};

export default Brands;
