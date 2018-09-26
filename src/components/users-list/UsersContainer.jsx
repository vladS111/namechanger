import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadUsers } from '../../actions/names'
import { deleteUser } from '../../actions/user'
import LoadingMessage from '../common/LoadingMessage'
import NamesList from './NamesList'

class UsersContainer extends Component {
    
    componentWillMount() {
        const { loadUsers, isLoaded } = this.props
        if (!isLoaded) {
            loadUsers()
        }
    }
    
    render() {
        const { isLoaded, names, deleteUser } = this.props
        if (!isLoaded) {
            return <LoadingMessage />
        }

        return (
            <NamesList
                list={names}
                deleteUser={deleteUser}
            />
        )
    }
    
}

const mapStateToProps = state => ({
    isLoaded: state.names.isLoaded,
    names: state.names.names,
})

const mapDispatchToProps = dispatch => ({
    loadUsers: () => dispatch(loadUsers()),

    deleteUser: (data) => dispatch(deleteUser(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)