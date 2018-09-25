import React from 'react'
import styled from 'styled-components'

export default ({ onClick = () => {}, children }) => (
    <Button onClick={onClick}>
        {children}
    </Button>
)


const Button = styled.button`
    border: 0;
    background: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    &:focus {
        outline: none;
    }
`