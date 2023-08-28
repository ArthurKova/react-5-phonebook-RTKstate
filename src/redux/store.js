import { configureStore } from '@reduxjs/toolkit';
import { formReducer } from './phonebook/reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'contacts',
  storage,
};

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const persistedReducer = persistReducer(persistConfig, formReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: customizedMiddleware,
});

const persistor = persistStore(store);

export { store, persistor };
