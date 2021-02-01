const executeQuery = require('../utilities/mongoConnect').executeQuery;
const db = "KYCompany";
const customerCollection = "customer";
let ObjectId = require('mongodb').ObjectID;



exports.addCustomer = async (customer) => {
    return await executeQuery(db, async (db) => await db.collection(customerCollection).insertOne(
        {name: customer.name, purchaseOrderId: customer.purchaseOrderId, address: customer.address}));
};

exports.updateCustomer = async (order_id, fields) => {
    const _id = ObjectId(order_id);
    return await executeQuery(db, async (db) => await db.collection(customerCollection).updateOne(
        {_id: _id}, {$set: fields}));
};

exports.deleteCustomer = async (id) => {
    const _id = ObjectId(id);
    return await executeQuery(db, async (db) => await db.collection(customerCollection).deleteOne(
        {_id: _id}));
};