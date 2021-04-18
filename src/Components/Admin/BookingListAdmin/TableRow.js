import React from 'react';

const TableRow = (props) => {
    const {orderTitle, orderDescription, orderDate, name,phone,email,card} = props.info;
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{orderTitle}</td>
            <td>{card.brand}</td>
            <td>payment done</td>
        </tr>
    );
};

export default TableRow;