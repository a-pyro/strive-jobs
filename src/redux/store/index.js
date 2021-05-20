import { createStore, combineReducers, applyMiddleware } from 'redux';
import favouritesReducer from 'redux/reducers/favourites';
import jobReducer from 'redux/reducers/jobs';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const initialState = {
  favourites: {
    favList: [],
  },
  jobs: {
    jobList: [],
    error: false,
    loading: false,
  },
};

const rootReducer = combineReducers({
  jobs: jobReducer,
  favourites: favouritesReducer,
});

const composedEnhancers = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;
