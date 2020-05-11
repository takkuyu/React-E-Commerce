import React from 'react';
import { Container, Table } from 'reactstrap';
import { auth } from '../../firebase/firebase.utils';
import {  Redirect } from 'react-router-dom'

const AccountPage = (props) => {
    if (props.currentUser === null) return <Redirect to='/account/login' />;

    const { displayName, email, createdAt, purchasedItems } = props.currentUser;
    const unix_timestamp = createdAt.seconds;
    const date = String(new Date(unix_timestamp * 1000)).slice(0, 16);
    console.log(props.currentUser)

    return (
        <div className='account-container' style={{ marginTop: '5rem' }}>
            <Container>
                <h2>MY ACCOUNT</h2>
                <p className='button' onClick={() => {
                    auth.signOut();
                    props.history.push('/');
                }}>LOGOUT</p>
                <div className='main-wrapper'>
                    <div className='user-content'>
                        <p>Your name: <span>{displayName}</span></p>
                        <p>Your email: <span>{email}</span></p>
                        <p>Joined on: <span>{date}</span></p>
                    </div>

                    <div className="table-responsive-md">
                        <h2>Your Orders</h2>
                        <Table>
                            <thead>
                                <tr>
                                    <th style={{ width: '8rem' }}></th>
                                    <th className='lg-cell'></th>
                                    <th className='md-cell'>PRICE</th>
                                    <th className='md-cell'>QTY</th>
                                    <th className='md-cell'>SIZE</th>
                                    <th>TOTAL</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    purchasedItems.map((item, index) =>
                                        (
                                            <tr key={index}>
                                                <td style={{ paddingLeft: '0' }}><img src={item.imageUrl} alt='product-img' /> </td>
                                                <td>{item.name}</td>
                                                <td>$ {item.price}</td>
                                                <td >{item.amount}</td>
                                                <td>{item.size}</td>
                                                <td>$ {item.price * item.amount}</td>
                                            </tr>
                                        )
                                    )
                                }
                            </tbody>
                        </Table>
                    </div>

                </div>
            </Container>
        </div>
    );

}

export default AccountPage;