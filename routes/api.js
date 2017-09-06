var express = require('express');
var router = express.Router();
var monk = require('monk');
var mongo = require('mongodb');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('api', { title: 'Bonobos API homework' });
});

//change if your default mongoDB is not local & port is different
var db = monk('localhost:27017/ecomm');
var product = db.get('products');
var inventory = db.get('inventory');

//render JSON to the browser window or get it via a curl/postman call
//API layer for doing product and inventory calls to the database
//Calls are done via product ID's or by calling directly to the /product
router.get('/product/:id', function(req, res) {
    product.find({ product_id: parseInt(req.params.id) }, function(err, product) {
        // console.log(product);
        if (err) throw err;
        res.json(product);
    });
});
//show all products
router.get('/product/', function(req, res) {
    product.find({}, function(err, product) {
        //console.log(product);
        if (err) throw err;
        res.json(product);
    });
});


router.get('/inventory/:id', function(req, res) {
    inventory.find({ product_id: parseInt(req.params.id) }, {}, function(err, inventory) {
        //console.log(req.params.id);
        if (err) throw err;
        res.json(inventory);
    });
});

//show all inventory levels
router.get('/inventory/', function(req, res) {
    inventory.find({}, {}, function(err, inventory) {
        if (err) throw err;
        res.json(inventory);
        console.log(1);
    });
});


//show query product then get it's  inventory level
router.get('/productinventory/:id', function(req, res) {

    var products = {};
    product.find({ product_id: parseInt(req.params.id) }, {}, function(err, prod) {
        //console.log(product);
        if (err) throw err;
        products.product = prod;
        // console.log(products);
        inventory.find({ product_id: parseInt(req.params.id) }, {}, function(err, inv) {
            if (err) throw err;
            products.inventory = inv;
            res.json(products);

            // console.log(products);
        });
    });
});

module.exports = router;