import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import { Store } from "redux";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import { AppStateProps } from "../@types/redux_root";

const sagaMiddleware = createSagaMiddleware();

const store: Store<AppStateProps> = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
