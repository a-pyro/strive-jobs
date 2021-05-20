import { createStore, combineReducers } from 'redux';
import favouritesReducer from 'redux/reducers/favourites';
import jobReducer from 'redux/reducers/jobs';

export const initialState = {
  favourites: {
    favList: [],
  },
  jobs: {
    jobList: [],
  },
};
const rootReducer = combineReducers({
  jobs: jobReducer,
  favourites: favouritesReducer,
});

const configureStore = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default configureStore;
