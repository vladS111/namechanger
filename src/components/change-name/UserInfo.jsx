import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import TextField from '../common/TextField'
import Button from '../common/Button'
import throwMessage from '../../utils/throwMessage'

export default class UserInfo extends Component {

    state = {
        value: ''
    }
    
    submit = event => {
        event.preventDefault()
        const { value } = this.state
        const { updateName, info: { id } } = this.props
        if (!value) {
            return throwMessage('error', 'The name field is required')
        }
        updateName({
            id,
            name: value
        })
    }

    handleChange = event => {
        this.setState({
            value: event.target.value
        })
    }

    render() {
        const { info: { name } } = this.props
        return (
            <Fragment>
                <Title>Name</Title>
                <form onSubmit={this.submit}>
                    <FormGroup>
                        <TextField
                            placeholder={name}
                            onChange={this.handleChange}
                        />
                        <Button
                            label='Save'
                            type='submit'
                            secondary
                            large
                        />
                    </FormGroup>
                </form>
            </Fragment>
        )
    }
    
}


const Title = styled.p`
    font-size: 22px;
`

const FormGroup = styled.div`
    input {
        margin-right: 10px;
    }
`