import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';
import '@syncfusion/ej2-base/styles/material.css';
import '@syncfusion/ej2-react-inputs/styles/material.css';
import '@syncfusion/ej2-react-dropdowns/styles/material.css';
import '@syncfusion/ej2-react-popups/styles/material.css';
import '@syncfusion/ej2-react-richtexteditor/styles/material.css';


ReactDOM.render(
  <ContextProvider>
      <App />
  </ContextProvider>,
  document.getElementById('root'),
);