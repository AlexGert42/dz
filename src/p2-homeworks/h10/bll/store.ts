import { combineReducers, createStore } from 'redux'
import {loadingReducer, stateLoadingReducerType} from './loadingReducer'

export type storeType = {
    loading: stateLoadingReducerType
}

const reducers = combineReducers<storeType>({
    loading: loadingReducer,
})

const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

// // @ts-ignore
// window.store = store // for dev
