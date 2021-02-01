const executeQuery = require('../utilities/mongoConnect').executeQuery;
const db = "KYCompany";
const productCollection = "product";
let ObjectId = require('mongodb').ObjectID;



exports.addProduct = async (product) => {
    return await executeQuery(db, async (db) => await db.collection(productCollection).insertOne(
        {name: product.name, price: product.price, status: product.status}));
};

exports.updateProduct = async (order_id, fields) => {
    const _id = ObjectId(order_id);
    return await executeQuery(db, async (db) => await db.collection(productCollection).updateOne(
        {_id: _id}, {$set: fields}));
};

exports.deleteProduct = async (id) => {
    const _id = ObjectId(id);
    return await executeQuery(db, async (db) => await db.collection(productCollection).deleteOne(
        {_id: _id}));
};