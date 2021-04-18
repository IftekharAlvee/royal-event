import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Book from './Book';

const BookingHolder = () => {

    const [orderInfo,seOrderInfo] = useState({});
    const [orderSending,setOrderSending] = useState(false);
    const [orderStatus,setOrderStatus] = useState(false);

    const handleOrder = () => {
        const orderData= {
          ...orderInfo
        };
        const url = "https://stark-mesa-31837.herokuapp.com/addOrder";
            fetch(url,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(orderData)
    
            })
            .then(response => {
                console.log(response);
                setOrderStatus(true);
                // alert("Order Placed successfully")
              })
              console.log(orderData);
      }
    return (
        <Container>
            {
                orderSending?
                 <h1>Payment Done!</h1> 
                 : <div>
                <Book seOrderInfo={seOrderInfo} setOrderSending={setOrderSending}></Book>
                </div>
            }

            {
                orderStatus? 
                <h1>Order Completed</h1>
                :
                <div>
                    <Button onClick={handleOrder} >Confirm Your Order</Button>
                </div>
            }
            
        </Container>
    );
};

export default BookingHolder;