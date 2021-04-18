import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';

const ManageServiceList = (props) => {
    const { title, _id} = props.event;

    const deleteService = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/deleteService/${id}`,{
            method: 'DELETE'
        })
        .then(res=> res.json())
        .then(data => {
            alert("Item is deleted ");
        })
    }
    return (
        <ListGroup.Item> Name: {title} <br/> <Button onClick={() => deleteService(_id)}>Delete Item</Button> </ListGroup.Item>
    );
};

export default ManageServiceList;