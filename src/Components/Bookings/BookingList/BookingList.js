import React, { useContext, useEffect, useState } from 'react';
import { CardDeck } from 'react-bootstrap';
import { UserContext } from '../../../App';
import BookingListCard from './BookingListCard';

const BookingList = () => {

    
    const [orderList, setOrderList] = useState([]);

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:5000/userOrders?email=" + loggedInUser.userEmail)
      .then((res) => res.json())
      .then((data) => {
        setOrderList(data);
        // console.log(data);
      });
  }, []);

    return (
        <div>
            <CardDeck>
                {
                    orderList?.map(orderList => <BookingListCard  orderList={orderList}></BookingListCard> )
                }
            </CardDeck>
        </div>
    );
};

export default BookingList;