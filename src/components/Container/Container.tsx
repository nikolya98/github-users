import * as React from 'react';
import cn from 'classnames';

import s from './Container.module.scss';

export type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return <div className={cn(className, s.container)}>{children}</div>;
};

export default React.memo(Container);
