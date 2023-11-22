const EventEmitter = require("node:events")

const emitter = new EventEmitter()

emitter.on("order-pizza", () => {
  console.log("Oredr received! Baking a pizza");
})

emitter.emit("order-pizza")