import throwMessage from './throwMessage'

export default (callback, response, failedCallback, failedCondition) => {
	const data = response.data
	if (response.errors) {
		response.errors.forEach(error => throwMessage('error', error.message))
		if (typeof failedCallback == 'function') {
			return failedCallback()
		}
	}
	if (response.alerts) {
		response.alerts.forEach(alert => throwMessage('warning', alert))
	}
	if (typeof failedCondition == 'function' && failedCondition(data.data)) {
		return failedCallback()
	}
	return callback(data)
}