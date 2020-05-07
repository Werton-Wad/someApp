import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import techReducer from './tech/reducer'; // export default
import { postReducer } from './post/reducer'; // export

const reducers = combineReducers({
  tech: techReducer,
  post: postReducer,
});

const middlewares = applyMiddleware(reduxThunk);

const store = createStore(reducers, middlewares);

store.subscribe(() => {
  console.log(store.getState());
});

export default store;