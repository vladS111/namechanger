import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from '../common/Button'
import IconButton from '../common/IconButton'

export default ({ user: { id, name }, deleteUser }) => (
    <Item>
        <Section textAlign='right'>
            <Name>{name}</Name>
        </Section>
        <Section textAlign='center'>
            <Link to={`/users/${id}`}>
                <Button
                    label='Change'
                />
            </Link>
        </Section>
        <Section textAlign='left'>
            <IconButton onClick={() => deleteUser({ id })}>
                <Icon src={require('../../assets/icons/delete.svg')} />
            </IconButton>
        </Section>
    </Item>
)


const Item = styled.li`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10px;
    &:last-child {
        margin-bottom: 0;
    }
`

const Name = styled.span`
    margin-right: 10px;
`

const Section = styled.div`
    text-align: ${props => props.textAlign};
    min-width: 100px;
`

const Icon = styled.img`
    vertical-align: middle;
`