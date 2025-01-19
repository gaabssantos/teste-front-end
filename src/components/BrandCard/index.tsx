import BrandLogo from '../../assets/Logo.png';

import './styles.scss';

const BrandCard = () => {
  return (
    <div className="brand-card">
      <img src={BrandLogo} alt="logo-da-marca" />
    </div>
  );
};

export default BrandCard;
