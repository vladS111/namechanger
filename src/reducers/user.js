import * as constants from '../constants/user'

const defaultState = {
    isLoaded: false,
    isUpdated: false,
    info: {}
}

export default (state = defaultState, action) => {
    const { type, data } = action
    switch(type) {
        
        case constants.LOAD_USER:
            return {
                ...state,
                isLoaded: true,
                info: data
            }

        case constants.UPDATE_NAME:
            return {
                ...state,
                isUpdated: true
            }

        case constants.RESET_INFO:
            return defaultState

        default:
            return state

    }
}