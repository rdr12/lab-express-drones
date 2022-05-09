// Iteration #1
const drones = [
    {
    image: ("/images/drone1.jpg"),
    name: "Creeper XL 500",
    propellers: 3,
    maxSpeed: 12
},
  {
    image: ("/images/drone2.jpg"),
    name: "Racer 57",
    propellers: 4,
    maxSpeed: 20
},
  {
    image: ("/images/drone3.jpg"),
    name: "Courier 3000i",
    propellers: 6,
    maxSpeed: 18
}
]

require("../db")

const DroneModel = require("../models/Drone.model.js")

const addDrone = async () => {
    try {
        await DroneModel.create(drones)
        console.log("todos los Drones han sido añadidos.")
    } catch(err){
        next(err)
    }
}
addDrone()
// mongoose.connection.close()