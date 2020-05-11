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

const StripeCheckoutButton = (props) => {
  const price = props.price
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_zoMr2SQCFRB2uFBlrvMSJTlI00USf01kUF';

  const onToken = token => { // submit callback
    addItemsToCart(props.currentUserId, props.cartItems)
    props.history.push('/account');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Takaya Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/KzP.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default withRouter(StripeCheckoutButton);