



export const homeWorkReducer = (state: any, action: any): any => {
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