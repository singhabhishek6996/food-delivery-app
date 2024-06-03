# [Urban Eats - Food Delivery Website](https://food-delivery-app-client-m6rc.onrender.com/)

Urban Eats is a food delivery website built using the MERN stack (MongoDB, Express, React, Node.js). This application allows users to sign in or sign up, browse and filter food items, add or remove items from the cart, proceed to checkout with payment integration using Stripe, and track their food orders. Additionally, an admin panel is provided where administrator can manage food items and orders.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [Admin Panel](#admin-panel)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication (sign in / sign up)
- Browse and filter food items by different types
- Add to cart and remove from cart functionality
- Proceed to checkout with Stripe payment integration
- Track food orders
- Admin panel to manage food items and orders
  - Add/remove foods
  - Take orders and update order status

## Technologies Used

- **Frontend**: React
- **Backend**: Express.js, Node.js
- **Database**: MongoDB
- **Payment Gateway**: Stripe
- **Authentication**: JSON Web Tokens (JWT)
- **State Management**: Redux
- **File Uploads**: Multer
- **ODM**: Mongoose
- **Middleware**: CORS
- **Password Hashing**: Bcrypt
- **Validation**: Validator

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm
- MongoDB

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/food-delivery-app.git
cd food-delivery-app
```

2. **Install dependencies for both frontend and backend:**

```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install

# Install admin dependencies
cd ../admin
npm install
```

## Configuration

### Backend Configuration

1. Create a `.env` file in the `server` directory and add the following environment variables:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

### Frontend Configuration

1. Create a `.env` file in the `client` and `admin`  directory and add the following environment variables:

```env
REACT_APP_API_URL=http://localhost:8000
```

## Running the Application

### Backend

1. **Start the backend server:**

```bash
cd server
node server.js
```

The backend server will run on `http://localhost:4000`.

### Frontend

1. **Start the client development server:**

```bash
cd client
npm run dev
```

2. **Start the admin development server:**

```bash
cd admin
npm run dev
```

The frontend server will run on `http://localhost:8000`.

## Usage

1. **User Authentication:**
   - Sign up for a new account or sign in with existing credentials.

2. **Browse Food Items:**
   - Filter food items by different types (e.g., cuisine, category).

3. **Cart Management:**
   - Add items to the cart.
   - Remove items from the cart.

4. **Checkout and Payment:**
   - Proceed to checkout and complete the payment using Stripe.

5. **Order Tracking:**
   - Track your orders and view order status.

## Admin Panel

1. **Manage Food Items:**
   - Add new food items to the website.
   - Remove existing food items.

2. **Manage Orders:**
   - View and process orders.
   - Update order status (e.g., pending, completed).

## Contributing

Contributions are welcome! Please create an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Deployment

Urban Eats is deployed and can be accessed using the following link:

[Urban Eats Deployment](https://food-delivery-app-client-m6rc.onrender.com/)

---

Enjoy using Urban Eats! If you have any questions or need further assistance, please feel free to contact us.
