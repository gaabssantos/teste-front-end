import Banner from './components/Banner';
import CategoriesBar from './components/CategoriesBar';
import NavBar from './components/NavBar';
import TopBar from './components/TopBar';

function App() {
  return (
    <main className="container">
      <TopBar />
      <NavBar />
      <CategoriesBar />
      <Banner />
    </main>
  );
}

export default App;
