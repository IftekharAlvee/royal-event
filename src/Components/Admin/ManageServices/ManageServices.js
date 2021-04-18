import React, { useEffect, useState } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import ManageServiceList from './ManageServiceList';

const ManageServices = () => {

    
    const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        // console.log(data);
      });
  }, []);
    return (
        <div>
      <Container>
        <h1>Services</h1>
        <ListGroup>
            {
                events?.map((event) => <ManageServiceList event={event}></ManageServiceList>)
            }
        </ListGroup>
      </Container>
    </div>
    );
};

export default ManageServices;