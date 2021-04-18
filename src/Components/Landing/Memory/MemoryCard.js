import React from 'react';
import { Card } from 'react-bootstrap';

const MemoryCard = (props) => {
    const {imageUrl} = props.image;
    return (
        <Card>
            <Card.Img variant="top" src={imageUrl} />
        </Card>
    );
};

export default MemoryCard;