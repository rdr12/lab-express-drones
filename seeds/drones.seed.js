// Iteration #1
const drones = [
    {
    image: "https://github.com/rdr12/lab-express-drones/blob/60a138a77fcbeab528e92401572a69503c8b1719/public/images/drone1.jpg?raw=true",
    name: "Creeper XL 500",
    propellers: 3,
    maxSpeed: 12
},
  {
    image: "https://github.com/rdr12/lab-express-drones/blob/master/public/images/drone2.jpg?raw=true",
    name: "Racer 57",
    propellers: 4,
    maxSpeed: 20
},
  {
    image: "https://github.com/rdr12/lab-express-drones/blob/master/public/images/drone3.jpg?raw=true",
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