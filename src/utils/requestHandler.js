import axios from 'axios'
import responseHandler from './responseHandler'
import throwMessage from './throwMessage'

export default ({ url, method, data }, callback) => {
	const origin = 'https://simple-rest-weld.herokuapp.com/'
	axios({
		method,
		data,
		url: origin + url,
	})
	.then(response => responseHandler(callback, response))
	.catch(error => {
		throwMessage('error', 'An occured error')
		console.error(error)
	})
}