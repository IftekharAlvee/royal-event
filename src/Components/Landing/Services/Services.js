import React from 'react';
import { Button, CardDeck, Container } from 'react-bootstrap';
import ServicesCard from './ServicesCard';
import weddingImg from '../../../images/wedding.jpg'
import birthdayImg from '../../../images/birthday.jpg'
import partyImg from '../../../images/party.jpg'
const Services = () => {
    
    const services = [
        {
            name: "Wedding Event",
            imageUrl: weddingImg,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestias adipisci alias exercitationem, optio eos"
        },
        {
            name: "Birthday",
            imageUrl: birthdayImg,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestias adipisci alias exercitationem, optio eos"
        },
        {
            name: "Official Party",
            imageUrl: partyImg,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestias adipisci alias exercitationem, optio eos"
        }
    ];

    // const call = () => {
    //     services.map(service => console.log(service.imageUrl))
    // }
    // call();


    return (
        <Container className="pt-5 mt-5 text-center">
            <h1 className=" py-5">Our Services</h1>
            <div>
                <CardDeck>
                    {
                        services.map(service => <ServicesCard service={service}></ServicesCard>)
                    }
                </CardDeck>
            </div>
            <div className="pb-5 my-5 d-flex justify-content-center">
                <Button variant="outline-primary">Primary</Button>
            </div>
        </Container>
    );
};

export default Services;