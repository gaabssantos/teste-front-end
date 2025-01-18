import './styles.scss';

import Search from '../../assets/icons/SearchBar/Search.svg';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="O que você está buscando?" />
      <img src={Search} alt="lupa-de-pesquisa" />
    </div>
  );
};

export default SearchBar;
