import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ServicesCard = (props) => {
    const {name,imageUrl,description} = props.service;
    console.log(name,imageUrl,description);
    return (
        <Card>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
                {description}
            </Card.Text>
            <Button variant="outline-primary">Primary</Button>
            </Card.Body>
        </Card>
    );
};

export default ServicesCard;