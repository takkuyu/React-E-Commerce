import React from 'react';
import { Container, Table } from 'reactstrap';
import { auth } from '../../firebase/firebase.utils';

const AccountPage = ({currentUser, history}) => {
    const { displayName, email, createdAt, purchasedItems } = currentUser;
    const unix_timestamp = createdAt.seconds;
    const date = String(new Date(unix_timestamp * 1000)).slice(0, 16);

    return (
        <div className='account-container' style={{ marginTop: '5rem' }}>
            <Container>
                <h2>YOUR ACCOUNT</h2>
                <p className='button' onClick={() => {
                    auth.signOut();
                    history.push('/');
                }}>LOGOUT</p>
                <div className='main-wrapper'>
                    <div className='user-content'>
                        <p>Your name: <span>{displayName}</span></p>
                        <p>Your email: <span>{email}</span></p>
                        <p>Joined on: <span>{date}</span></p>
                    </div>
                    <h2>Your Orders</h2>
                    {
                        purchasedItems.length !== 0 ?
                            <div className="table-responsive-md">
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
                            :
                            <p style={{ fontSize: '1.8em', textAlign: 'center' }}>You haven't placed any orders yet</p>
                    }

                </div>
            </Container>
        </div>
    );

}

export default AccountPage;