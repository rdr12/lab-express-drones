const express = require('express');
const router = express.Router();

const DroneModel = require("../models/Drone.model.js")

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  DroneModel.find()
  .then((drone) => {
    console.log(drone)
    res.render("drones/list.hbs", {
      listDrones: drone
    })
  }).catch((err) => {
    next(err)
  })
});

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form.hbs")
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  console.log(req.body)
  const {image, name, propellers, maxSpeed} = req.body
  
  DroneModel.create({
    image,
    name,
    propellers,
    maxSpeed
  })
  .then((drone) => {
    res.redirect("/drones")
  })
  .catch((err) => {
    next(err)
  })

});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {id} = req.params;

  DroneModel.findById(id)
  .then((drone) => {
    res.render("drones/update-form.hbs", {
      drone
    })
  })
  .catch((err)=> {
    next(err)
  })
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const {image, name, propellers, maxSpeed} = req.body
  const {id} = req.params

  DroneModel.findByIdAndUpdate(id, {
    image,
    name,
    propellers,
    maxSpeed
  })
  .then((drone) => {
    res.redirect("/drones")
  })
  .catch((err) => {
    next(err)
  })
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const {id} = req.params

  DroneModel.findByIdAndDelete(id)
  .then((drone) => {
    res.redirect("/drones")
  })
  .catch((err) => {
    next(err)
  })
});

module.exports = router;
