import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from 'components/App';
import 'styles/main.scss';

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
