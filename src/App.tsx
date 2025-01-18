import CategoriesBar from './components/CategoriesBar';
import NavBar from './components/NavBar';
import TopBar from './components/TopBar';

function App() {
  return (
    <main className="container">
      <TopBar />
      <NavBar />
      <CategoriesBar />
    </main>
  );
}

export default App;
