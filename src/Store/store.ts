import { applyMiddleware, combineReducers, createStore } from 'redux'

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { composeWithDevTools } from 'redux-devtools-extension';
import { conditionsReducer } from '../Components/Conditions/State/reducers';
import { demographicReducer } from '../Components/Demographic/State/reducers'
import { persistReducer } from 'redux-persist'
import { questionsReducer } from '../Components/Questionaire/State/reducers';
import storage from 'redux-persist/lib/storage'
import thunk from "redux-thunk";

const reducers = {
  demographicState: demographicReducer,
  conditionsState: conditionsReducer,
  questionsState: questionsReducer,
}

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
}

const rootReducer = combineReducers(reducers)
type RootState = ReturnType<typeof rootReducer>
const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer)

export const configureStore = () => createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
