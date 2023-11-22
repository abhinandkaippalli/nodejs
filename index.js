const EventEmitter = require("node:events");

const emitter = new EventEmitter();

// emitter.on("order-pizza", () => {
//   console.log("Oredr received! Baking a pizza");
// })

// emitter.emit("order-pizza")

//passing arguements
// emitter.on("order-pizza", (size, topping) => {
//   console.log(`Oredr received! Baking a ${size} pizza ${topping}`);
// });

// emitter.emit("order-pizza", "large", "mushrooms");

//multiple listener
emitter.on("order-pizza", (size, topping) => {
  console.log(`Oredr received! Baking a ${size} pizza ${topping}`);
});

emitter.on("order-pizza", (size) => {
  if (size === "large") {
    console.log("Serving complimentary drink!");
  }
});

emitter.emit("order-pizza", "large", "mushrooms");
