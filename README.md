
# Trendify Using React.js+TypeScript and Firebase

Trendify is an ecommerce web application that enables users from anywhere in the world to effortlessly purchase their desired products. With an extensive range of products across various categories, Trendify offers a seamless shopping experience. Whether it's fashion, electronics, home decor, or any other item, users can easily find and add their desired products to the cart. The intuitive interface ensures a smooth checkout process, and with just two clicks, users can place an order and have their products delivered right to their doorstep. Trendify combines convenience, variety, and reliability to make online shopping a breeze for customers.

This app utilizes the latest web technologies, delivering a seamless user experience. Leveraging these advancements ensures speed, scalability, and an immersive interface. Users can enjoy fast load times, smooth navigation, and a responsive design that adapts to various devices. With a focus on optimizing performance and scalability.

During the project, one of the challenges I encountered was efficiently updating data and managing API calls. 

The main reason of the project is to give users an awesome experience and offer them some really cool features. Important thing is,users should feel that using this app is effortless and enjoyable. 




## Features

- Responsive and user-friendly interface
- Highly performant, efficient, and scalable
- Dark and light mode toggle for personalized experience
- Convenient registration and login with Google authentication
- Optimistic updates for seamless user interactions
- Secure and seamless Stripe payment integration
- Form validation using Zod for enhanced data integrity
- User page showcasing ordered products for easy reference


## Installation

Install StripeApi with npm (If you don't want checkout features in the app you can skip this part) https://github.com/kaifkalanthar/StripeApi/ clone this repo in your local machine and run this command 

```bash
  npm i
```
After installing npm package add .env file in root directory
```
STRIPE_KEY = 'YOUR_STRIPE_SECRET_KEY'
# Eg : sk_test_23ASDy6SAKqJkQVx5DZ5s2jXMtWpBJpOdIi47UbNJMjtHZ9UGB5qcMWwHi4LRoXTaa3TGDQ0BoVJXF8k4C99kXKNh00UgURUi29

CLIENT_URL = 'YOUR_CLIENT_URL'
#Eg : http://localhost:5173/

```
Run the project using 

```
nodemon
[or] 
npm start
```

Now, Installation of the app(Website) https://github.com/kaifkalanthar/Eshop clone the repo in your local machine.



#### STEP-1: Firebase Config
#### Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file

```
VITE_API_KEY = YOUR_API_KEY 
VITE_AUTH_DOMAIN =  YOUR_AUTH_DOMAIN
VITE_PROJECT_ID = YOUR_PROJECT_ID
VITE_STORAGE_BUCKET =  YOUR_STORAGE_BUCKET
VITE_MESSAGING_SENDER_ID = YOUR_MESSAGING_SENDER_ID
VITE_APP_ID = YOUR_APP_ID
VITE_FIREBASE_URL = YOUR_FIREBASE_URL
# if you could not find firebase url in SDK setup and configuration you just go to realtime database,copy the url and paste in YOUR_FIREBASE_URL
```

go to /src/config/`firebase-config.ts`

```
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
```



Replace your config values in firebaseConfig (Before setup firebase project in firebase, if you don't know how to create firebase config refer this video https://www.youtube.com/watch?v=7aZI0OB9Pew)

#### STEP-2: NPM Install
Use this command to install the dependencies
```
npm i
```
#### STEP-3: Run the app
Use this command to run on browser
```
npm run dev
```

#### STEP-4: Build
Use this command to build
```
npm run build
```

[If you like to deploy the site I suggest you to use Vercel for client side and Render for server side]










    
## Tech Stack

**Client:** React, TypeScript, Chakra-UI

**Libraries:** Zustand for state management, React Query, React Router, Zod, React hook forms 

**Server:** Firebase, Node, Express


## Demo
https://eshop-ochre.vercel.app/
#### Demo Account
Email : user@gmail.com

Password : user#asyu
## Screenshots
Home Page
![Trendify_Home_Page](https://github.com/kaifkalanthar/Eshop/assets/77534625/fab3b25c-eb74-4a38-ad8f-b6795b8a0949)

Login Page
![Trendify_Login_Page](https://github.com/kaifkalanthar/Eshop/assets/77534625/96f1b485-4c4b-4700-9537-9670895db649)

Product Page
![Trendify_Product_Page](https://github.com/kaifkalanthar/Eshop/assets/77534625/3556b95d-3ddb-4025-8b6d-657467d7306e)

Cart Page
![Trendify_Cart_Page](https://github.com/kaifkalanthar/Eshop/assets/77534625/18047bcf-ff26-44e4-a379-357c6e7a2508)


Profile Page
![Trendify_Profile_Page](https://github.com/kaifkalanthar/Eshop/assets/77534625/59de22a5-c499-40c7-9b81-c4e28d083dbf)

Stripe Payment Page
![Trendify_Stripe_Payment_Page](https://github.com/kaifkalanthar/Eshop/assets/77534625/9a3098d2-4f3a-4d41-990e-f656a79cc2e0)




## License

[MIT](https://github.com/kaifkalanthar/Eshop/blob/master/LICENSE)


## Contact

- LinkedIn - https://www.linkedin.com/in/mhdkaif/

If you have any feedback or would like to share your thoughts, I would love to hear from you! Kindly send me a direct message on LinkedIn. Your feedback is valuable to me, and I appreciate your time in reaching out. Let's connect and keep the conversation going!
