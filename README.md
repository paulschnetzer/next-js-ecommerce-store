# Next.js Project (E-commerce store for Coffee)

## Description

This is a Fullstack Project where you can buy coffee.
There are a total of 5 Pages involved

1. Landing Page
2. dynamic Productpages for the 6 Coffees
3. a checkout where you can see your order/total Price and can chancel orders
4. a payment Page where you need to enter your personal Information (payment and shipping) to continue
5. a thank you Page

## Technologies

1. HTML, CSS
2. Next.js
3. React.js (with Hooks)
4. PostgreSQL
5. TypeScript
6. Tests: Cypress and Jest

## Screenshots

### The Landing Page

![Screenshot 1](https://github.com/paulschnetzer/next-js-ecommerce-store/blob/main/public/screenshot-loading-page.PNG | width=200)

### The Product Page Page

![Screenshot 2](https://github.com/paulschnetzer/next-js-ecommerce-store/blob/main/public/screenshot-product-page.PNG | width=200)

### The Checkout Page

![Screenshot 3](https://github.com/paulschnetzer/next-js-ecommerce-store/blob/main/public/screenshot-checkout-page.PNG | width=200)

## Screenshots

## Setup instructions

1. create a repo (cd in the folder where you want to save the projects, git clone https://github.com/paulschnetzer/next-js-ecommerce-store)
2. install the necceery dependencies (npm install or yarn install)
3. Setup the database (having postgresSQL installed is a requirement)

- open postgres in your commandline
- change the .env.example file in the Root directory to .env and choose replace the "XXXXXX" with your desired Username, Password and Database
- type npm run migrate up or yarn migrate up to create the table and the coffee
  - you can also replace the Array of Objects in the migrations\1602592297-addNewCoffeesIntoTable.js with items of your choice (please stick to the generall structure otherwise buggs could accour)

4. to run the application: type yarn dev in your terminal and go to the localhost that opens up

## Deployment Instructions

deployed to Heroku
