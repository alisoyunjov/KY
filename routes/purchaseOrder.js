const express = require("express");
const bodyParser = require("body-parser");

const {
    addPurchaseOrder,
    deletePurchaseOrder,
    updatePurchaseOrder,
    getItemIds
} = require("..//dataAccess/purchaseData");


const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.get("/", async function(req, res) {
    console.log("path /api/order/");

    res.status(200).send("/api/order/ in users controller");
});


router.post(
    "/add", async function (req, res){

        console.log("path /api/purchaseOrder/add/");

        let purchaseOrder = {
            productId: req.body.productId,
            unitPrice: req.body.unitPrice,
            quantity: req.body.quantity,
            warehouseAddress: req.body.warehouseAddress
        };
        const result = await addPurchaseOrder(purchaseOrder);
        console.log(result.ops[0]._id);
        if(result) {
            res.status(200).json({message: "Added purchase order"});
        }else {
            res.status(500).json({error: "Internal server error"});
        }

    }
);


router.patch(
    "/update", async function (req, res){
        //TODO: Get the email from the cookie
        console.log("path /api/order/update/");
        let id = req.body._id;
        let purchaseOrder = {
            productId: req.body.productId,
            unitPrice: req.body.unitPrice,
            quantity: req.body.quantity,
            warehouseAddress: req.body.warehouseAddress
        };
        const result = await updatePurchaseOrder(id, purchaseOrder);
        if(result) {
            res.status(200).json({message: `Updated an order with id: ${id}`});
        }else {
            res.status(500).json({error: "Internal server error"});
        }

    }
);

router.delete('/:id', async function (req, res) {
    console.log('DELETE path /api/orders/:id');
    const result = await deletePurchaseOrder(req.params.id);
    if(result.deletedCount){
        res.status(200).send({message: `order with id: ${req.params.id} has been deleted!`});
    }
    res.status(404).send({error: `order with id: ${req.params.id} not found!`});
});


router.get('/delivered', async function (req, res) {
    console.log('Get path /api/orders/delivered');
//    get all item ids from purchase items
    let itemIds = await getItemIds();
    console.log(itemIds);
//    check the status for all items count
});


//export the router
module.exports = router;
