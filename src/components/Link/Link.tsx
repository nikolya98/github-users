import cn from 'classnames';
import * as React from 'react';
import { Link as BaseLink } from 'react-router-dom';

import { AnchorProps, isLinkProps, LinkProps } from './types';

export type Props = {
  className?: string;
} & (AnchorProps | LinkProps);

const Link: React.FC<Props> = ({ className, children, ...props }) => {
  const classNames = cn(className, 'link');

  if (isLinkProps(props)) {
    return (
      <BaseLink {...props} className={classNames}>
        {children}
      </BaseLink>
    );
  }

  return (
    <a target="_blank" rel="noreferrer" {...props} className={classNames}>
      {children}
    </a>
  );
};

export default React.memo(Link);
