import React from 'react';
import Card from './Card';
const CardList = ({ robots }) => {
    const cardList = robots.map((user, i) => {
        return (
            <Card key={user.id} name={user.name} email={user.email} />
        )
    })
    return (
        cardList
    )
}

export default CardList;