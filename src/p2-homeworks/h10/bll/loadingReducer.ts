
export type stateLoadingReducerType = {
    loading: boolean
}
type loadingActionType = {
    type: string
    payload: boolean
}

const initState = {
    loading: false
}

export const loadingReducer = (state: stateLoadingReducerType = initState, action: loadingActionType): stateLoadingReducerType => { // fix any
    switch (action.type) {
        case 'CHENGE_STATE_LOADER':
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}


export const loadingAC = (value: boolean): loadingActionType => ({
    type: 'CHENGE_STATE_LOADER',
    payload: value
})


