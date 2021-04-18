import React, { useEffect, useState } from 'react';
import { Button, CardDeck, Container } from 'react-bootstrap';
import ServicesCard from './ServicesCard';


const Services = () => {
    
    

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
        <Container className="pt-5 mt-5 text-center">
            <h1 className=" py-5">Our Services</h1>
            <div>
                <CardDeck>
                    {
                        events?.map(service => <ServicesCard service={service} key={service._id}></ServicesCard>)
                    }
                </CardDeck>
            </div>
            {/* <div className="pb-5 my-5 d-flex justify-content-center">
                <Button variant="outline-primary">Primary</Button>
            </div> */}
        </Container>
    );
};

export default Services;