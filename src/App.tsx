import { useEffect } from 'react';
import Modal from './components/Modal';
import NavBar from './components/NavBar';
import TopBar from './components/TopBar';
import Footer from './containers/Footer';
import { useModal } from './context/useModal';
import MainContent from './containers/MainContent';

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
    <div className="app">
      <TopBar />
      <NavBar />
      <MainContent />
      <Footer />
      {modal.isOpen && <Modal />}
    </div>
  );
}

export default App;
