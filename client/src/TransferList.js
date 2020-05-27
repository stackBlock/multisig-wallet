import React from 'react';
import {
    Container, Row, Col, Navbar, NavbarBrand, Nav, NavItem, NavLink, Card, CardBody, CardTitle, CardSubtitle, CardText, Button
  } from 'reactstrap';

function TransferList({ transfers, approveTransfer, approveTransfer2 }) {
    return (
        <div>
            <h2>Transfers</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Amount</th>
                        <th>To</th>
                        <th>approvals</th>
                        <th>add[0]-apr</th>
                        <th>add[1]-apr</th>
                        <th>sent</th>
                    </tr>
                </thead>
                <tbody>
                    {transfers.map(transfer => (
                        <tr key={transfer.id}>
                            <td>{transfer.id}</td>
                            <td>{transfer.amount}</td>
                            <td>{transfer.to}</td>
                            <td style={{ display: 'flex', justifyContent: 'center' }}>{transfer.approvals}</td>
                            <td><Button color={ transfer.sent ? 'success' : 'warning' } onClick={() => approveTransfer(transfer.id)}>Approve</Button></td>
                            <td><Button color={ transfer.sent ? 'success' : 'warning' } onClick={() => approveTransfer2(transfer.id)}>Approve</Button></td>
                            <td>{transfer.sent ? 'yes' : 'no'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TransferList;