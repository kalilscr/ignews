import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import { stripe } from "../../../services/stripe";


export default async (req: NextApiRequest, resp: NextApiResponse) => {
    if(req.method === 'POST'){
        const session = await getSession({ req });

        const stripeCustomer = await stripe.customers.create({
            email: session.user.email,
            // metadata
        })

        const stripeCheckoutSession = await stripe.checkout.sessions.create({
            customer: stripeCustomer.id,
            payment_method_types: ['card'],
            billing_address_collection: 'required',
            line_items: [
                {price: 'price_1JPrjLAy0GPHMlAxBva2g9fz', quantity: 1}
            ],
            mode: 'subscription',
            allow_promotion_codes: true,
            success_url: process.env.STRIPE_SUCCESS_URL,
            cancel_url: process.env.STRIPE_CANCEL_URL
        })

        return resp.status(200).json({ sessionId: stripeCheckoutSession })
    } else {
        resp.setHeader('Allow', 'POST');
        resp.status(405).end('Method not allowed')
    }
}