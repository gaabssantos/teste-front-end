import Banner from './components/Banner';
import CategoriesBar from './components/CategoriesBar';
import NavBar from './components/NavBar';
import ProductCategory from './components/ProductCategory';
import TopBar from './components/TopBar';
import Partners from './containers/Partners';
import RelatedProducts from './containers/RelatedProducts';

function App() {
  return (
    <main className="container">
      <TopBar />
      <NavBar />
      <CategoriesBar />
      <Banner />
      <ProductCategory />
      <RelatedProducts />
      <Partners />
    </main>
  );
}

export default App;
