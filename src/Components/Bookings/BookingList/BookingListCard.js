import React from 'react';
import { Card } from 'react-bootstrap';

const BookingListCard = (props) => {

    
    const { orderTitle, orderDescription, orderDate, name,phone,email,card} = props.orderList;

    const time = new Date();
    return (
        <Card border="dark" style={{ width: '18rem' }}>
            <Card.Header>Order</Card.Header>
            <Card.Body>
            <Card.Title>{orderTitle}</Card.Title>
            <Card.Text>
                {orderDescription}
                <b>Ordered by:</b> <p>{name}</p>
                <b>phone:</b> <p>{phone}</p>
                <b>Email:</b> <p>{email}</p>
                <b>Payment method:</b> <p>{card.brand}</p>
            </Card.Text>
            </Card.Body>
            <Card.Footer><b>Order time:</b> {orderDate}</Card.Footer>
        </Card>
    );
};

export default BookingListCard;