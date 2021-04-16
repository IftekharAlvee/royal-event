import React from 'react';
import { CardDeck } from 'react-bootstrap';
import BookingListCard from './BookingListCard';

const BookingList = () => {

    const bookingList = [
        {
            name:"wedding",
            time: 123,
            description: "Some quick example text to build on the card title and make up the bulk of the cards content."
        },
        {
            name:"wedding",
            time: 123,
            description: "Some quick example text to build on the card title and make up the bulk of the cards content."
        }
    ];

    return (
        <div>
            <CardDeck>
                {
                    bookingList.map(order => <BookingListCard order={order}></BookingListCard> )
                }
            </CardDeck>
        </div>
    );
};

export default BookingList;