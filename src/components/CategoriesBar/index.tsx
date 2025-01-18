import './styles.scss';

import Subscribe from '../../assets/icons/Subscribe.svg';

const CategoriesBar = () => {
  return (
    <div className="categories-bar">
      <p className="category-name">Todas categorias</p>
      <p className="category-name">Supermercado</p>
      <p className="category-name">Livros</p>
      <p className="category-name">Moda</p>
      <p className="category-name">Lançamentos</p>
      <p className="category-name highlight">Ofertas do dia</p>
      <div className="subscribe">
        <img src={Subscribe} alt="icone-assinatura" />
        <p className="category-name">Assinatura</p>
      </div>
    </div>
  );
};

export default CategoriesBar;
