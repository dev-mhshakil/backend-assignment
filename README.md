# E-commerce Product Management API

This project is an API for managing products and orders in an e-commerce application. It includes functionality for creating, updating, deleting, and searching products, as well as managing inventory and creating orders.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Product Management](#product-management)
  - [Order Management](#order-management)
- [Error Handling](#error-handling)
- [License](#license)

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/dev-mhshakil/backend-assignment.git
   cd ecommerce-api

   ```

2. Install dependencies:

   ```sh
   npm install

   ```

3. Set up environment variables:
   Create a .env file in the root directory and add your environment variables. For example:

   ```sh
   MONGODB_URI=mongodb://localhost:27017/ecommerce
   PORT=5000

   ```

4. Start the development server

   ```sh
   npm run start:dev

   ```

5. Start the production server
   ```sh
   npm run start
   ```

## Usage

### Product Management

- Create a new product

  - Endpoint: `/api/products`
  - Method: `POST`
  - Request Body:

  ```sh
  {
  "name": "iPhone 13",
  "description": "A sleek and powerful smartphone with cutting-edge features.",
  "price": 999,
  "category": "Electronics",
  "tags": ["smartphone", "Apple", "iOS"],
  "variants": [
      {
          "type": "Color",
          "value": "Midnight Blue"
      },
      {
          "type": "Storage Capacity",
          "value": "256GB"
      }
  ],
  "inventory": {
      "quantity": 50,
      "inStock": true
  }
  }

  ```

- Get all products

  - Endpoint: `/api/products`
  - Method: `GET`

- Update a product

  - Endpoint: `/api/products/:productId`
  - Method: `PUT`
  - Request Body: (same as create product)

- Delete a product

  - Endpoint: `/api/products/:productId`
  - Method: `DELETE`

- Search products

  - Endpoint: `/api/products?searchTerm=Product name you want to search`
  - Method: `GET`
  - Query Parameter: `searchTerm`
  - Example: `/api/products?searchTerm=iphone`

- Order Management

- Create a new order

  - Endpoint: `/api/orders`
  - Method: `POST`
  - Request Body:

  ```sh
  {
  "email": "customer@example.com",
  "productId": "60c72b2f9b1e8e1a4c8d2c9f",
  "quantity": 1,
  "price": 999
  }

  ```

- Get all order

  - Endpoint: `/api/orders`
  - Method: `GET`

- Get an order by ID

  - Endpoint: `/api/orders/:orderId`
  - Method: `GET`

- Update an order

  - Endpoint: `/api/orders/:orderId`
  - Method: `PUT`
  - Request Body: (same as create order)

- Delete an order
  - Endpoint: `/api/orders/:orderId`
  - Method: `DELETE`

## Error Handling

The API provides standard error responses for various error scenarios.

### Sample Error Responses

- Insufficient Quantity Error

  ```sh
  {
      "success": false,
      "message": "Insufficient quantity available in inventory"
  }

  ```

- Not Found Error

  ```sh
  {
      "success": false,
      "message": "Order not found"
  }

  ```

- Not Found Route
  ```sh
  {
      "success": false,
      "message": "Route not found"
  }
  ```

## Licence

This project is licensed under the MIT License. See the LICENSE file for details.
