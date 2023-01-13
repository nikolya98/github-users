import cn from 'classnames';
import * as React from 'react';

import s from './Container.module.scss';

export type ContainerProps = {
  className?: string;
};

const Container: React.FC<React.PropsWithChildren<ContainerProps>> = ({ className, children }) => {
  return <div className={cn(className, s.container)}>{children}</div>;
};

export default React.memo(Container);
