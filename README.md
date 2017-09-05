# bonobos

1. Install node https://nodejs.org/en/download/
2. Install mongo db https://docs.mongodb.com/manual/installation/

## Import the data into mongo

1. mongoimport --headerline --type csv --db ecomm --collection products --file products.csv
2. mongoimport —headerline --type csv --db ecomm --collection inventory --file inventory.csv

## Grab files
1. git clone https://github.com/Timfrazer/bonobos.git
2. inside the folder *npm install*
3. Start the mongo server mongod
4. start node nodemon

Server is now running....

let's test out the API
Test the API via CURL
use any product id 1
curl localhost:3000/product/1
curl localhost:3000/inventory/1
