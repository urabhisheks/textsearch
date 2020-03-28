import {combineReducers} from 'redux';
import documentReducer from './document.reducer';
// import {persistReducer} from 'redux-persist';
// import storageSession from 'redux-persist/lib/storage/session';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'root',
//   storage: storageSession,
//   whitelist: ['cart'],
// } 

const rootReducer = combineReducers({
  document: documentReducer,
});

// export default persistReducer(persistConfig, rootReducer);
export default rootReducer;
