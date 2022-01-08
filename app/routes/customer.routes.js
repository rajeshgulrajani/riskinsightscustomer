module.exports = app => {
    const customer = require("../controllers/customer.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", customer.create);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", customer.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", customer.update);
  
    app.use('/customer', router);
  };