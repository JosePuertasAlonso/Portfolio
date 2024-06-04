import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import Modal from 'react-modal';
import './i18n'; // Asegúrate de importar la configuración de i18n

Modal.setAppElement('#root');

// Espera a que i18n se inicialice antes de renderizar la aplicación
import('./i18n').then(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
