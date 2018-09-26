import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import throwMessage from '../../utils/throwMessage'
import { loadUser, resetInfo, updateName } from '../../actions/user'
import { loadUsers } from '../../actions/names'
import LoadingMessage from '../common/LoadingMessage'
import UserInfo from './UserInfo'

class UserContainer extends Component {
    
    static contextTypes = {
        router: PropTypes.object
    }
    
    componentWillMount() {
        const { router: { route: { match: { params: { id } } } } } = this.context
        const { loadUser, loadUsers, isUsersLoaded } = this.props
        if (!isUsersLoaded) {
            loadUsers()
        }
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
        const { isInfoLoaded, isUsersLoaded, info, updateName } = this.props
        if (!isInfoLoaded || !isUsersLoaded) {
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
    isInfoLoaded: state.user.isLoaded,
    isUsersLoaded: state.names.isLoaded,
    isUpdated: state.user.isUpdated,
    info: state.user.info,
})

const mapDispatchToProps = dispatch => ({
    loadUser: (data) => dispatch(loadUser(data)),

    loadUsers: (data) => dispatch(loadUsers(data)),

    resetInfo: (data) => dispatch(resetInfo(data)),

    updateName: (data) => dispatch(updateName(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)