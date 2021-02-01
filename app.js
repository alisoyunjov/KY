let express = require('express');
let app = express();
let purchaseOrder = require('./routes/purchaseOrder.js');
let product = require('./routes/product.js');
let customer = require('./routes/customer.js');
const PORT = process.env.PORT || 5000;




app.use('/api/purchaseOrder', purchaseOrder);
app.use('/api/product', product);
app.use('/api/customer', customer);




app.use(function (req, res) {
    let fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.status(404).send("Sorry can't find that in the api! The URL is: " + fullUrl);
});


app.listen(PORT, () => console.log('Start listening on port: ' + PORT));
