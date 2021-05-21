import {createStore,combineReducers,applyMiddleware} from "redux";
import demoReducer from './reducers/demoReducer'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
const rootReducer = combineReducers({
    demoReducer
});
const store = createStore(rootReducer,composeWithDevTools(
    applyMiddleware(thunk),
    // other store enhancers if any
  ))

export default store;