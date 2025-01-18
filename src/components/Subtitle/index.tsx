import { ReactNode } from 'react';

import './styles.scss';

type SubtitleProps = {
  children: ReactNode;
};

const Subtitle = ({ children }: SubtitleProps) => {
  return <h2 className="subtitle">{children}</h2>;
};

export default Subtitle;
