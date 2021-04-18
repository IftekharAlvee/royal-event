import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const ServicesCard = (props) => {
    const {title,imageURL,description} = props.service;
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const handleOrderItemInfo =() => {
        const orderItemInfo = {
            ...loggedInUser,
            orderTitle: title,
            orderDescription: description,
            orderDate: new Date()
        }
        setLoggedInUser(orderItemInfo);
    };

    // console.log(title,imageURL,description);
    
    return (
        <Card>
            <Card.Img variant="top" src={imageURL} />
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {description}
            </Card.Text>
            <Button onClick={handleOrderItemInfo} variant="outline-warning"><Link style={{color:"black",textDecoration:"none"}} to="/checkout">Order Now</Link></Button>
            </Card.Body>
        </Card>
    );
};

export default ServicesCard;