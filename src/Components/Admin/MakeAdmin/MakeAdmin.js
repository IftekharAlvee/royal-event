import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const MakeAdmin = () => {

    const [admin, setAdmin] = useState([])

    const handleAdmin = (event) => {
        const adminInfo = {
            adminEmail : event
        };
        setAdmin(adminInfo);
        
    }
    const handleSubmit = () => {
        console.log(admin);
        const url = "https://stark-mesa-31837.herokuapp.com/addAdmin";
      fetch(url,{
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(admin)

      })
      .then(response => {
          console.log(response);
          alert("Admin added successfully")
        })
    }

    return (
        <div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={(event)=>handleAdmin(event.target.value)} type="email" placeholder="Enter email" />
                </Form.Group>
                <Button onClick={handleSubmit} variant="primary" >
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default MakeAdmin;