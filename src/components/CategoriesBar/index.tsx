import './styles.scss';

import SubscribeIcon from '../../icons/SubscribeIcon';

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
        <SubscribeIcon />
        <p className="category-name">Assinatura</p>
      </div>
    </div>
  );
};

export default CategoriesBar;
