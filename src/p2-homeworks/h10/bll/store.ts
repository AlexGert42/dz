import { combineReducers, createStore } from 'redux'
import {loadingReducer, stateLoadingReducerType} from './loadingReducer'
import {stateThemeReducerType, themeReducer} from "./themeReducer";

export type storeType = {
    loading: stateLoadingReducerType
    theme: stateThemeReducerType
}

const reducers = combineReducers<storeType>({
    loading: loadingReducer,
    theme: themeReducer
})

const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// // @ts-ignore
// window.store = store // for dev
