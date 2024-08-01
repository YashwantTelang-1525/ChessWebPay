const express = require('express');
const Stripe = require('stripe');
const bodyParser = require('body-parser');
const app = express();
const stripe = Stripe('your-stripe-secret-key');

app.use(bodyParser.json());

app.post('/create-checkout-session', async (req, res) => {
  const { level } = req.body;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'inr',
          product_data: {
            name: `${level} Chess Course`,
          },
          unit_amount: level === 'BEGINNER' ? 1000 * 100 : level === 'INTERMEDIATE' ? 1500 * 100 : 2500 * 100,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'http://localhost:4200/?paymentStatus=success&level=' + level,
    cancel_url: 'http://localhost:4200/?paymentStatus=cancel&level=' + level,
  });

  res.json({ id: session.id });
});

app.listen(3000, () => console.log('Server is running on port 3000'));
