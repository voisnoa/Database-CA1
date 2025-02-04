const mongoose = require("mongoose")

const restaurentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true 
    },
    city:{
        type: String, 
        requires: true
    },
    itemsArray:{
        type: [String]
    }
})

const itemDetailSchema = new mongoose.schema ({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    }
})

