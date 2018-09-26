import * as API from '../utils/api'
import * as constants from '../constants/names'

export const loadUsers = data => dispatch => {
    return API.fetchUsers().then(response => {
        dispatch({
            type: constants.LOAD_USERS,
            data: response
        })
    })
}