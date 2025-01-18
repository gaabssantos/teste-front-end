import './styles.scss';

import Button from '../Button';

const Banner = () => {
  return (
    <div className="banner">
      <h1>Venha conhecer nossas promoções</h1>
      <h2>
        <span className="highlight">50% Off</span> nos produtos{' '}
      </h2>
      <Button type="yellow">Ver produto</Button>
    </div>
  );
};

export default Banner;
