import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './utils/i18n';
import { ConfigProvider } from 'antd';
import { ThemeProvider } from './hooks/useTheme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </I18nextProvider>
    </ConfigProvider>
  </React.StrictMode>
);
