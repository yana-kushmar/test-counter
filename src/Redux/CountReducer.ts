const SET_VALUE_INC = "SET_VALUE_INC"
const RESET = "RESET"
const MAX_VALUE = "MAX_VALUE"
const MIN_VALUE = "MIN_VALUE"



const initialState = {
    min: 0,
    max: 0,
    value: 0
}

export function countReducer(state= initialState, action: any ){
    switch (action.type) {
        case SET_VALUE_INC:
            return {
                ...state,
                value: state.value +1
            }
        case RESET:
        return {
            ...state,
            value: state.min
        }
        case MAX_VALUE:
            return {
                ...state,
                max: action.value
            }
        case MIN_VALUE:
            return {
                ...state,
                min: action.value,
                value: action.value
            }
        default:
            return state
    }
}

export const setIncrementAC = () =>({type: SET_VALUE_INC})
export const setResetAC = () => ({type: RESET})
export const setMaxValueAC = (value: number) => ({type: MAX_VALUE, value})
export const setMinValueAC = (value:number) => ({type: MIN_VALUE, value})
