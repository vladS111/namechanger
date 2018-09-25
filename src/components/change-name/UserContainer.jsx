import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import throwMessage from '../../utils/throwMessage'
import { loadUser, resetInfo, updateName } from '../../actions/user'
import LoadingMessage from '../common/LoadingMessage'
import UserInfo from './UserInfo'

class UserContainer extends Component {
    
    static contextTypes = {
        router: PropTypes.object
    }
    
    componentWillMount() {
        const { router: { route: { match: { params: { id } } } } } = this.context
        const { loadUser } = this.props
        loadUser({ id })
    }

    componentWillUnmount() {
        const { resetInfo } = this.props
        resetInfo()
    }

    componentWillUpdate(nextProps) {
        const { router: { history: { push } } } = this.context
        const { isUpdated: oldUpdated } = this.props
        const { isUpdated: newUpdated } = nextProps
        if (oldUpdated !== newUpdated) {
            throwMessage('success', 'User is saved!')
            setTimeout(() => push('/'), 2500)
        }
    }
    
    render() {
        const { isLoaded, info, updateName } = this.props
        if (!isLoaded) {
            return <LoadingMessage />
        }

        return (
            <UserInfo
                info={info}
                updateName={updateName}
            />
        )
    }
    
}

const mapStateToProps = state => ({
    isLoaded: state.user.isLoaded,
    isUpdated: state.user.isUpdated,
    info: state.user.info,
})

const mapDispatchToProps = dispatch => ({
    loadUser(data) {
        dispatch(loadUser(data))
    },

    resetInfo(data) {
        dispatch(resetInfo(data))
    },

    updateName(data) {
        dispatch(updateName(data))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)