import { useEffect } from 'react';
import Banner from './components/Banner';
import CategoriesBar from './components/CategoriesBar';
import Modal from './components/Modal';
import NavBar from './components/NavBar';
import ProductCategory from './components/ProductCategory';
import TopBar from './components/TopBar';
import Brands from './containers/Brands';
import Footer from './containers/Footer';
import Newsletter from './containers/Newsletter';
import Partners from './containers/Partners';
import RelatedProducts from './containers/RelatedProducts';
import { useModal } from './context/useModal';

function App() {
  const modal = useModal();

  useEffect(() => {
    if (modal.isOpen) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0);
    } else {
      document.body.style.overflow = 'auto';
    }
  });

  return (
    <main className="container">
      <TopBar />
      <NavBar />
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
      <Footer />
      {modal.isOpen && <Modal />}
    </main>
  );
}

export default App;
