import './styles.scss';

import Logo from '../../assets/Logo.svg';
import SearchBar from '../SearchBar';

import Group from '../../assets/icons/Group.png';
import Favorite from '../../assets/icons/Favorite.svg';
import User from '../../assets/icons/User.svg';
import Cart from '../../assets/icons/Cart.svg';

const NavBar = () => {
  return (
    <header className="nav-bar">
      <img src={Logo} alt="logo" />
      <SearchBar />
      <div className="nav-actions">
        <img src={Group} alt="grupo" />
        <img src={Favorite} alt="favoritos" />
        <img src={User} alt="usuário" />
        <img src={Cart} alt="carrinho" />
      </div>
    </header>
  );
};

export default NavBar;
