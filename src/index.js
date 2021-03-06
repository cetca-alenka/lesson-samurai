import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

// export let RenderApp = (state) => {
  ReactDOM.render(
    <BrowserRouter> 
    //<React.StrictMode>
      <Provider store={store}>
        {/* <App state={store.getState()} dispatch={store.dispatch.bind(store)}store={store} /> */}
        <App />
      </Provider>
    //</React.StrictMode>,
    </BrowserRouter>,
    document.getElementById('root')
  );
// }

// RenderApp(store.getState());
//store.subscribe(() => {
//let store = store.getState();
//RenderApp(store);
//});
//store.subscribe(RenderApp)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
