import axios from './axios'

export const baseUrl = 'https://simple-rest-weld.herokuapp.com'

export function fetchUsers() {
  return axios(`${baseUrl}/users`)
    .then((response) => response.data);
}

export function fetchUser(data) {
    return axios(`${baseUrl}/users/${data.id}`)
      .then((response) => response.data);
  }

export function updateName(data) {
    return axios({
        url: `${baseUrl}/user/${data.id}`,
        method: 'PUT',
        data
    }).then((response) => response.data)
}

export function deleteUser(data) {
    return axios({
        url: `${baseUrl}/user/${data.id}`,
        method: 'DELETE'
    }).then((response) => response.data)
}