import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51I4ZOQAIINSp5ZxXjgtFf8LPGT2mbI5BrvB17btmV2r9UCAvxM3fZdeXJz2dXzDCepk8KGsA0TOhps8R3GLkyEIC00pJG6vbsr';



const onToken = token => {
    console.log(token);
    alert('Payment Successful!!!')
}

return(
    <StripeCheckout
            label='Pay Now'
            name='Saurabh Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}    
    />
);
};

export default StripeCheckoutButton;