import React from 'react';
import { Button, Form } from 'react-bootstrap';

const AddService = () => {
    return (
        <div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Service Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Titele" />
                </Form.Group>

                <Form.Group>
                    <Form.File id="exampleFormControlFile1" label="Service image" />
                </Form.Group>
                
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Service Description</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddService;