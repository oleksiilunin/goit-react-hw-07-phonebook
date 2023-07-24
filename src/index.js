import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { App } from 'components/App/App';
import { PersistGate } from 'redux-persist/integration/react';

import { BeatLoader } from 'react-spinners';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate
        loading={
          <BeatLoader
            color="#36d7b7"
            cssOverride={{}}
            margin={2}
            size={16}
            speedMultiplier={1}
          />
        }
        persistor={persistor}
      >
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
