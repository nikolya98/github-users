import * as React from 'react';

import { Meta } from 'types/meta';

import Spinner from './Spinner';

export type StatusWrapperProps = {
  meta: Meta;
};

const StatusWrapper: React.FC<React.PropsWithChildren<StatusWrapperProps>> = ({ meta, children }) => {
  if (meta === Meta.loading) {
    return <Spinner />;
  }

  if (meta === Meta.error) {
    return <>Что-то пошло не так:(</>;
  }

  return <>{children}</>;
};

export default React.memo(StatusWrapper);
