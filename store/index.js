import thunkMiddleware from 'redux-thunk';
import {applyMiddleware, createStore, compose} from "redux";

import rootReducer from "../reducers";



//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

export default function configureStore() {
  return createStore(rootReducer,
        compose(applyMiddleware(thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    );
}
