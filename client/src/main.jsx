import { createRoot } from 'react-dom/client'
import './index.css' // loads Tailwind css globally so that every component can use those classes
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom' // When the URL changes from / to /login, BrowserRouter notices it and tells React which page to show. Without wrapping your app in BrowserRouter, React has no idea what /login or /app means.
import { Provider } from 'react-redux'
import { store } from './app/store.js'

createRoot(document.getElementById('root')).render(
  // App - Your root component that contains all the pages and routing logic. Everything starts from here. We also wrap the App component so that the store is accessible to all the components in the app.
  <BrowserRouter>
  <Provider store={store}>
     <App /> 
  </Provider>

  </BrowserRouter>,
)
