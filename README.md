# bonobos

1. Install node https://nodejs.org/en/download/
2. Install mongo db https://docs.mongodb.com/manual/installation/

## Import the data into mongo
1. go to the data folder inside of the project
1. mongoimport --headerline --type csv --db ecomm --collection products --file products.csv
2. mongoimport —headerline --type csv --db ecomm --collection inventory --file inventory.csv

## Grab files
1. git clone https://github.com/Timfrazer/bonobos.git
2. inside the folder type *npm install*
3. Start the mongo server type *mongod*
4. start node type *npm start*

Server is now running....

let's test out the API
Test the API via CURL
use any product id may I sugest the number *1*

1. GET a product - curl localhost:3000/product/1 
2. GET all products - curl localhost:3000/product 
3. GET the inventory for a product - curl localhost:3000/inventory/1 
3. GET all inventory - curl localhost:3000/inventory 
3. GET product & inventory - curl localhost:3000/productinventory/1 
