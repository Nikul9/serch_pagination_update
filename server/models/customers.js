require('dotenv').config()
const mongoose = require('mongoose');
const constant = require('../utils/constant')

const CustomersSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    city: String,
    company: String,
    image : String
})

const customers = mongoose.model(constant.DB_MODEL_REF.CUSTOMERS,CustomersSchema)

module.exports = customers