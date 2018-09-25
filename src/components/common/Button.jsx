import React from 'react'
import styled from 'styled-components'

export default ({ label, onClick = () => {}, ...rest }) => (
    <Button
        {...rest}
        onClick={onClick}
    >
        {label}
    </Button>
)


const Button = styled.button`
    cursor: pointer;
    background: ${props => props.secondary ? 'rgb(248, 96, 96)' : 'rgb(0, 210, 239)'};
    padding: ${props => props.large ? '12px 30px' : '8px 15px'};
    margin: 0;
    border: 0;
    border-radius: 4px;
    color: #fff;
    font-size: 14px;
    &:focus {
        outline: 0;
    }
`