import SearchIcon from '../../icons/SearchIcon';
import './styles.scss';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="O que você está buscando?" />
      <SearchIcon />
    </div>
  );
};

export default SearchBar;
