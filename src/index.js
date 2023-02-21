import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// загруить все необходимое для Redux
// создать кликер(кнопка с числом, при нажатии на которое будет выдаваться рандомное
// число от 1 до 6)
// Math.random()
