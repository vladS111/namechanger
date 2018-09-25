import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadUsers, resetInfo } from '../../actions/names'
import LoadingMessage from '../common/LoadingMessage'
import NamesList from './NamesList'

class UsersContainer extends Component {
    
    componentWillMount() {
        const { loadUsers } = this.props
        loadUsers()
    }

    componentWillUnmount() {
        const { resetInfo } = this.props
        resetInfo()
    }
    
    render() {
        const { isLoaded, names } = this.props
        if (!isLoaded) {
            return <LoadingMessage />
        }

        return <NamesList list={names} />        
    }
    
}

const mapStateToProps = state => ({
    isLoaded: state.names.isLoaded,
    names: state.names.names,
})

const mapDispatchToProps = dispatch => ({
    loadUsers() {
        dispatch(loadUsers())
    },

    resetInfo(data) {
        dispatch(resetInfo(data))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)