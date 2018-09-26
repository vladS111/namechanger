import * as constants from '../constants/user'
import * as API from '../utils/api'

export const loadUser = data => dispatch => {
    return API.fetchUser(data).then(response => {
        dispatch({
            type: constants.LOAD_USER,
            data: response
        })
    })
}

export const resetInfo = data => ({
    type: constants.RESET_INFO
})

export const updateName = data => dispatch => {
    return API.updateName(data).then(response => {
        dispatch({
            type: constants.UPDATE_USER,
            data
        })
    })
}

export const deleteUser = data => dispatch => {
    return API.deleteUser(data).then(response => {
        dispatch({
            type: constants.DELETE_USER,
            data
        })
    })
}