import { createContext, ReactNode, useContext, useState } from 'react';

interface IModalType {
  isOpen: boolean;
  toggleModal: () => void;
}

const ModalContext = createContext<IModalType | undefined>(undefined);

interface IModalProviderProps {
  children: ReactNode;
}

export const ModalProvider = ({ children }: IModalProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleModal = (): void => {
    setIsOpen((prev) => !prev);
  };

  const value: IModalType = {
    isOpen,
    toggleModal,
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
