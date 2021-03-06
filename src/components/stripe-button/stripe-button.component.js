import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { withRouter } from 'react-router-dom'
import { addPurchasedItemsToUser } from '../../firebase/firebase.utils'

async function addItemsToCart(currentUserId, cartItems) {
  try {
    await addPurchasedItemsToUser(currentUserId, cartItems);
  } catch (error) {
    console.error(error);
  }
}

const StripeCheckoutButton = ({ price, cartItems, clearAllItemsFromCart, currentUser, history }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_zoMr2SQCFRB2uFBlrvMSJTlI00USf01kUF';

  const onToken = token => { // submit callback
    if (currentUser) {
      addItemsToCart(currentUser.id, cartItems)
      clearAllItemsFromCart()
      alert("Payment Successful!")
      history.push('/account');
      return
    }

    clearAllItemsFromCart()
    alert("Payment Successful!")
    history.push('/');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Takaya Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://i.ibb.co/ZTwPLSv/takaya-logo.png'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default withRouter(StripeCheckoutButton);