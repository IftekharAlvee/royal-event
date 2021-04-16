import React from 'react';

const TableRow = (props) => {
    const {name,email,paymentMethod,status,ServiceName,} = props.info;
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{ServiceName}</td>
            <td>{paymentMethod}</td>
            <td>{status}</td>
        </tr>
    );
};

export default TableRow;