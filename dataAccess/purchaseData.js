const executeQuery = require('../utilities/mongoConnect').executeQuery;
const db = "KYCompany";
const purchaseOrderCollection = "purchaseOrder";
let ObjectId = require('mongodb').ObjectID;



exports.addPurchaseOrder = async (purchaseOrder) => {
    return await executeQuery(db, async (db) => await db.collection(purchaseOrderCollection).insertOne(
        {productId: purchaseOrder.productId, unitPrice: purchaseOrder.unitPrice, quantity: purchaseOrder.quantity, warehouseAddress: purchaseOrder.warehouseAddress}));
};

exports.updatePurchaseOrder = async (order_id, fields) => {
    const _id = ObjectId(order_id);
    return await executeQuery(db, async (db) => await db.collection(purchaseOrderCollection).updateOne(
        {_id: _id}, {$set: fields}));
};

exports.deletePurchaseOrder = async (id) => {
    const _id = ObjectId(id);
    return await executeQuery(db, async (db) => await db.collection(purchaseOrderCollection).deleteOne(
        {_id: _id}));
};

exports.getItemIds = async () => {
    return await executeQuery(db, async (db) => await db.collection(purchaseOrderCollection).find({}
        ));
}