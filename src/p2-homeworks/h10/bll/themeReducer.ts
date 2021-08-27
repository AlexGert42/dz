
export type stateThemeReducerType = {
    theme: string
}
type ThemeActionType = {
    type: string
    payload: string
}

const initState = {
    theme: 'some'
}

export const themeReducer = (state: stateThemeReducerType = initState, action: ThemeActionType): stateThemeReducerType => { // fix any
    switch (action.type) {
        case 'CHENGE_THEME':
            return {
                ...state,
                theme: action.payload
            }
        default:
            return state
    }
}


export const themeAC = (value: string): ThemeActionType => ({
    type: 'CHENGE_THEME',
    payload: value
})


