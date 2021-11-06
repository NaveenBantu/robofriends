import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    const cardComponent = robots.map((user, i) => {
        return <Card key={user.id} user={user} />           // Bonus tip: key prop should have something that doesn't change.
        // Array index can change if array items get moved. Better key would be someting unique like id
    })
    return (
        <div>
            {cardComponent}
        </div>
    )
}

export default CardList;