import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from '../common/Button'
import IconButton from '../common/IconButton'

export default ({ list }) => (
    <Fragment>
        <Title>Name</Title>
        <List>
            {list.map(({ id, name }) => (
                <Item key={id}>
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
                        <IconButton onClick={() => alert('User is deleted')}>
                            <Icon src={require('../../assets/icons/delete.svg')} />
                        </IconButton>
                    </Section>
                </Item>
            ))}
        </List>
    </Fragment>
)


const Title = styled.p`
    font-size: 22px;
`

const List = styled.ul`
    font-size: 18px;
    list-style: none;
`

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