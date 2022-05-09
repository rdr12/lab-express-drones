// Iteration #1
const {Schema, model} = require ("mongoose");

const droneSchema = new Schema({
    image: {
        data: String, 
    },
    name: {
        type: String,
    },
    propellers: {
        type: Number,
    },
    maxSpeed: {
        type: Number,
    }
})

const DroneModel = model("drone", droneSchema)

module.exports = DroneModel;