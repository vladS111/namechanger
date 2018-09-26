import axios from '../utils/requestHandler'
import * as constants from '../constants/names'

export const loadUsers = data => dispatch => {
    axios({
        url: 'users',
        method: 'GET'
    }, response => {
        dispatch({
            type: constants.LOAD_USERS,
            data: response
        })
    })
}