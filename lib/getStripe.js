import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe('pk_test_51LMYdJIMBYkmz9xbIt9H3uG8ZuzUVaFCunBHnw05m13jhroZIHYyGISWLBhFXXfdnf37uafvxX5mVuw4BwHbCS1P00z1qjyE7g');
    }

    return stripePromise;
}

export default getStripe;