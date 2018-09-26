import * as constants from '../constants/user'
import axios from '../utils/requestHandler'

export const loadUser = data => dispatch => {
    axios({
        url: `users/${data.id}`,
        method: 'GET'
    }, reponse => {
        dispatch({
            type: constants.LOAD_USER,
            data: reponse
        })
    })
}

export const resetInfo = data => ({
    type: constants.RESET_INFO
})

export const updateName = data => dispatch => {
    axios({
        url: `users/${data.id}`,
        method: 'PUT',
        data: data
    }, response => {
        dispatch({
            type: constants.UPDATE_USER,
            data
        })
    })
}

export const deleteUser = data => dispatch => {
    axios({
        url: `users/${data.id}`,
        method: 'DELETE'
    }, response => {
        dispatch({
            type: constants.DELETE_USER,
            data
        })
    })
}