import React from 'react'
import styled from 'styled-components'

export default (props) => (
    <TextField {...props} />
)


const TextField = styled.input`
    border: 2px solid rgb(167, 165, 166);
    border-radius: 4px;
    font-size: 16px;
    padding: 10px 5px;
    &:focus {
        outline: none;
    }
`