const express = require("express");
const bodyParser = require("body-parser");

const {
    addCustomer,
    deleteCustomer,
    updateCustomer
} = require("..//dataAccess/customerData");


const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get("/", async function(req, res) {
    console.log("path /api/customer/");

    res.status(200).send("/api/customer/ in users controller");
});

router.post(
    "/add", async function (req, res){

        console.log("path /api/customer/add/");

        let customer = {
            name: req.body.name,
            purchaseOrderId: req.body.purchaseOrderId,
            address: req.body.address,
        };
        const result = await addCustomer(customer);
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
        console.log("path /api/customer/update/");
        let id = req.body._id;
        let customer = {
            name: req.body.name,
            purchaseOrderId: req.body.purchaseOrderId,
            address: req.body.address,
        };
        const result = await updateCustomer(id, customer);
        if(result) {
            res.status(200).json({message: `Updated an customer with id: ${id}`});
        }else {
            res.status(500).json({error: "Internal customer error"});
        }

    }
);

router.delete('/:id', async function (req, res) {
    console.log('DELETE path /api/customer/:id');
    const result = await deleteCustomer(req.params.id);
    if(result.deletedCount){
        res.status(200).send({message: `customer with id: ${req.params.id} has been deleted!`});
    }
    res.status(404).send({error: `customer with id: ${req.params.id} not found!`});
});

//export the router
module.exports = router;
