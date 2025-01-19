import Banner from '../../components/Banner';
import CategoriesBar from '../../components/CategoriesBar';
import ProductCategory from '../../components/ProductCategory';
import Brands from '../Brands';
import Newsletter from '../Newsletter';
import Partners from '../Partners';
import RelatedProducts from '../RelatedProducts';

const MainContent = () => {
  return (
    <main>
      <CategoriesBar />
      <Banner />
      <ProductCategory />
      <RelatedProducts isFirstSection />
      <Partners />
      <RelatedProducts />
      <Partners />
      <Brands />
      <RelatedProducts />
      <Newsletter />
    </main>
  );
};

export default MainContent;
