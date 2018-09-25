import * as constants from '../constants/names'

const defaultState = {
    isLoaded: false,
    names: []
}

export default (state = defaultState, action) => {
    const { type, data } = action
    switch(type) {

        case constants.LOAD_USERS:
            return {
                ...state,
                isLoaded: true,
                names: data
            }

        case constants.RESET_INFO:
            return defaultState

        default:
            return state

    }
}