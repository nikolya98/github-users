import * as React from 'react';

import s from './Spinner.module.scss';

const Spinner: React.FC = () => {
  return <span className={s.spinner} />;
};

export default React.memo(Spinner);
