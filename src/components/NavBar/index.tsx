import './styles.scss';

import Logo from '../../assets/Logo.png';
import SearchBar from '../SearchBar';

import FavoritesIcon from '../../icons/FavoritesIcon';
import UsersIcon from '../../icons/UsersIcon';
import CartIcon from '../../icons/CartIcon';
import GroupIcon from '../../icons/GroupIcon';

const NavBar = () => {
  return (
    <header className="nav-bar">
      <img src={Logo} alt="logo" />
      <SearchBar />
      <div className="nav-actions">
        <GroupIcon />
        <FavoritesIcon />
        <UsersIcon />
        <CartIcon />
      </div>
    </header>
  );
};

export default NavBar;
