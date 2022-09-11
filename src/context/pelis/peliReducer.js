import {
    OBTENER_PELI,
    OBTENER_NOW,
    OBTENER_TEN
} from '../../types'

const peliReducer = (state, action) => {
    switch (action.type) {

        case OBTENER_PELI:
            return {
                ...state,
                pelis: action.payload,
            }

        case OBTENER_NOW:
            return {
                ...state,
                now: action.payload,
            }

        case OBTENER_TEN:
            return {
                ...state,
                tend: action.payload,
            }

        default:
            return state
    }
}

export default peliReducer