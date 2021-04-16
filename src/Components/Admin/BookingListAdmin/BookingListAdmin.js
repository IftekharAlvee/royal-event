import React from 'react';
import { Table } from 'react-bootstrap';
import TableRow from './TableRow';

const BookingListAdmin = () => {
    const services = [
        {
            name: "Shamanta Sharmin Sristy",
            email:"shamantasristy@gmail.com",
            paymentMethod: "credit card",
            status:"done",
            ServiceName: "Wedding Event",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestias adipisci alias exercitationem, optio eos"
        },
        {
            name: "Shamanta Sharmin Sristy",
            email:"shamantasristy@gmail.com",
            paymentMethod: "credit card",
            status:"done",
            ServiceName: "Birthday",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestias adipisci alias exercitationem, optio eos"
        },
        {
            name: "Shamanta Sharmin Sristy",
            email:"shamantasristy@gmail.com",
            paymentMethod: "credit card",
            status:"done",
            ServiceName: "Official Party",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestias adipisci alias exercitationem, optio eos"
        },
        {
            name: "Shamanta Sharmin Sristy",
            email:"shamantasristy@gmail.com",
            paymentMethod: "credit card",
            status:"done",
            ServiceName: "Wedding Event",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestias adipisci alias exercitationem, optio eos"
        },
        {
            name: "Shamanta Sharmin Sristy",
            email:"shamantasristy@gmail.com",
            paymentMethod: "credit card",
            status:"done",
            ServiceName: "Birthday",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestias adipisci alias exercitationem, optio eos"
        },
        {
            name: "Shamanta Sharmin Sristy",
            email:"shamantasristy@gmail.com",
            paymentMethod: "credit card",
            status:"done",
            ServiceName: "Official Party",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates molestias adipisci alias exercitationem, optio eos"
        }
    ];

    return (
        <div>
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email ID</th>
                        <th>Services</th>
                        <th>Payment Method</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        services.map(info => <TableRow info={info}></TableRow>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default BookingListAdmin;