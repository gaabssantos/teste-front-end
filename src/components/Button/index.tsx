import { ReactNode } from 'react';
import './styles.scss';

type ButtonProps = {
  type: 'yellow' | 'purple';
  children: ReactNode;
  onClick?: () => void;
};

const Button = ({ type, children, onClick }: ButtonProps) => {
  return (
    <button
      className={
        type === 'yellow'
          ? 'button-container yellow-button'
          : 'button-container purple-button'
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
