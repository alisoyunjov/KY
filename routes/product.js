const express = require("express");
const bodyParser = require("body-parser");

const {
    addProduct,
    deleteProduct,
    updateProduct
} = require("..//dataAccess/productData");


const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get("/", async function(req, res) {
    console.log("path /api/product/");

    res.status(200).send("/api/product/ in users controller");
});

router.post(
    "/add", async function (req, res){

        console.log("path /api/product/add/");

        let product = {
            name: req.body.name,
            price: req.body.price,
            status: req.body.status,
        };
        const result = await addProduct(product);
        console.log(result.ops[0]._id);
        if(result) {
            res.status(200).json({message: "Added product"});
        }else {
            res.status(500).json({error: "Internal server error"});
        }

    }
);


router.patch(
    "/update", async function (req, res){
        //TODO: Get the email from the cookie
        console.log("path /api/product/update/");
        let id = req.body._id;
        let product = {
            name: req.body.name,
            price: req.body.price,
            status: req.body.status,
        };
        const result = await updateProduct(id, product);
        if(result) {
            res.status(200).json({message: `Updated an order with id: ${id}`});
        }else {
            res.status(500).json({error: "Internal server error"});
        }

    }
);

router.delete('/:id', async function (req, res) {
    console.log('DELETE path /api/product/:id');
    const result = await deleteProduct(req.params.id);
    if(result.deletedCount){
        res.status(200).send({message: `product with id: ${req.params.id} has been deleted!`});
    }
    res.status(404).send({error: `product with id: ${req.params.id} not found!`});
});


//export the router
module.exports = router;
