import { toast } from 'react-toastify'

const defaultType = 'warning'
const toastPosition = {
	position: toast.POSITION.TOP_CENTER
}

export default (type = defaultType, message) => {
	switch (type) {

		case 'warning':
			return toast.warn(message, toastPosition)

		case 'success':
			return toast.success(message, toastPosition)

		case 'error':
			return toast.error(message, toastPosition)

		default:
			return

	}
}