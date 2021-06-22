import { UserType } from "../HW8"

type sortUpActionType = {
    type: string
    payload: string
}
type sortDownActionType = {
    type: string
    payload: string
}
type checkActionType = {
    type: string
    payload: number
}

type homeWorkReducerActionType = sortUpActionType | sortDownActionType | checkActionType


export const homeWorkReducer = (state: UserType[], action: homeWorkReducerActionType): UserType[] => {
    let newState = [...state]
    switch (action.type) {
        case 'sort':
            if (action.payload === 'up') {
                newState.sort((a, b) => {
                    if (a.name > b.name ) {
                        return 1
                    } else {
                        return -1;
                    }
                    return 0;
                })
            } else if (action.payload === 'down') {
                newState.sort((a, b) => {
                    if (a.name < b.name ) {
                        return 1
                    } else {
                        return -1;
                    }
                    return 0;
                })
            }
            return [
                ...newState
            ]
        case 'check': {
            newState = newState.filter(el => el.age >= action.payload)
            return [
                ...newState
            ]
        }
        default: return state
    }
}