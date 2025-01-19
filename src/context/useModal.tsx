import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { IProducts } from '../interface/Products';

interface IModalType {
  isOpen: boolean;
  toggleModal: () => void;
  currentProduct: IProducts | undefined;
  setCurrentProduct: Dispatch<SetStateAction<IProducts | undefined>>;
}

const ModalContext = createContext<IModalType | undefined>(undefined);

interface IModalProviderProps {
  children: ReactNode;
}

export const ModalProvider = ({ children }: IModalProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentProduct, setCurrentProduct] = useState<IProducts | undefined>(
    undefined,
  );

  const toggleModal = (): void => {
    setIsOpen((prev) => !prev);
  };

  const value: IModalType = {
    isOpen,
    toggleModal,
    currentProduct,
    setCurrentProduct,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export function useModal(): IModalType {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
