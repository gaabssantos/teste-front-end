import './styles.scss';

import { ReactNode } from 'react';

type ProductCategoryCardProps = {
  children: ReactNode;
  categoryName: string;
  isActive?: boolean;
};

const ProductCategoryCard = ({
  children,
  categoryName,
  isActive,
}: ProductCategoryCardProps) => {
  return (
    <div className="product-category-card">
      <div className="category-image">{children}</div>
      <p className={isActive ? 'active' : ''}>{categoryName}</p>
    </div>
  );
};

export default ProductCategoryCard;
