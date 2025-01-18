import { ReactNode } from 'react';
import './styles.scss';

type ButtonProps = {
  type: 'yellow' | 'purple';
  children: ReactNode;
};

const Button = ({ type, children }: ButtonProps) => {
  return (
    <button
      className={
        type === 'yellow'
          ? 'button-container yellow-button'
          : 'button-container purple-button'
      }
    >
      {children}
    </button>
  );
};

export default Button;
