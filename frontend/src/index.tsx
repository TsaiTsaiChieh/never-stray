import './index.css'
import './styles/App.scss'

import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import {persistStore} from 'redux-persist'
import {PersistGate} from 'redux-persist/integration/react'

import App from './App'
import store from './store'

const persistor = persistStore(store)

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
)
