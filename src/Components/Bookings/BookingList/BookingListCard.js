import React from 'react';
import { Card } from 'react-bootstrap';

const BookingListCard = (props) => {

    const {name,description} = props.order;

    const time = new Date();
    return (
        <Card border="dark" style={{ width: '18rem' }}>
            <Card.Header>Order</Card.Header>
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
                {description}
            </Card.Text>
            </Card.Body>
            <Card.Footer>{time.toDateString()}</Card.Footer>
        </Card>
    );
};

export default BookingListCard;