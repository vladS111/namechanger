import findIndex from 'lodash/findIndex'
import * as constants from '../constants/names'
import * as userConstants from '../constants/user'
import deepClone from '../utils/deepClone'

const defaultState = {
    isLoaded: false,
    names: []
}

export default (state = defaultState, action) => {
    const { type, data } = action
    let users, userIndex
    switch(type) {

        case constants.LOAD_USERS:
            return {
                ...state,
                isLoaded: true,
                names: data
            }

        case userConstants.UPDATE_USER:
            userIndex = findIndex(state.names, { id: data.id })
            users = deepClone(state.names)
            users[userIndex].name = data.name
            return {
                ...state,
                names: users
            }

        case userConstants.DELETE_USER:
            return {
                ...state,
                names: state.names.filter(user => user.id !== data.id)
            }
            
        default:
            return state

    }
}