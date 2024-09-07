// import the classes
import Truck from "../classes/Truck.js";
import Motorbike from "../classes/Motorbike.js";
import Car from "../classes/Car.js";

// define the interface
interface AbleToTow {
  tow(): void;
}

// implement the interface
Truck.prototype.tow = function () {
  console.log("Towing a caravan");
};


// export the interface
export default AbleToTow;
