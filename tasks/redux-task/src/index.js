import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import reducer from "./Store/Reducers";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
const store = createStore(
  reducer,

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const persistor = persistStore(store);
ReactDOM.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
    {/* </React.StrictMode> */}
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
