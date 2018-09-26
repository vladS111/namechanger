import React, { Fragment } from 'react'
import styled from 'styled-components'
import UserItem from './UserItem'

export default ({ list, deleteUser }) => (
    <Fragment>
        <Title>Name</Title>
        <List>
            {list.map((user) => (
                <UserItem
                    key={user.id}
                    user={user}
                    deleteUser={deleteUser}
                />
            ))}
            {!list.length && (
                <Message>The list is empty</Message>
            )}
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

const Message = styled.p`
    font-size: 16px;
`