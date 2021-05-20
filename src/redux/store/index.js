import { createStore, combineReducers, applyMiddleware } from 'redux';
import favouritesReducer from 'redux/reducers/favourites';
import jobReducer from 'redux/reducers/jobs';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

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
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favourites'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composedEnhancers);
export const persistor = persistStore(store);

// export e configurazione senza persist
// const store = createStore(rootReducer, composedEnhancers);
// export default store;
