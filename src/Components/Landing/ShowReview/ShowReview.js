import React, { useEffect, useState } from 'react';
import { CardDeck, Container } from 'react-bootstrap';
import ReviewCard from './ReviewCard';

const ShowReview = () => {
    // const reviews = [
    //     { 
    //         name: "Shamanta Sristy",
    //         rating: 4,
    //         reviewDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestias adipisci alias exercitationem, optio eos"
    //     },
    //     { 
    //         name: "Shamanta Sristy",
    //         rating: 4,
    //         reviewDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestias adipisci alias exercitationem, optio eos"
    //     },
    //     { 
    //         name: "Shamanta Sristy",
    //         rating: 4,
    //         reviewDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestias adipisci alias exercitationem, optio eos"
    //     }
    // ]

    const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://stark-mesa-31837.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        // console.log(data);
      });
  }, []);

    return (
        <Container>

            <div class="text-center py-2 my-2">
                <h1>Review Section</h1>
            </div>

            <div class="py-5 my-5 text-center">
                <CardDeck>
                    {
                        events?.map(review => <ReviewCard review={review}></ReviewCard>)
                    }
                </CardDeck>
            </div>
            
        </Container>
    );
};

export default ShowReview;