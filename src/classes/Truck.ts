// Import the Vehicle, Motorbike, Car, Wheel classes and the AbleToTow interface
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';


// Implement the Truck class that extends Vehicle and implements AbleToTow
class Truck extends Vehicle implements AbleToTow {
  // Declare properties of the Truck class
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;
  

  // Constructor that accepts properties of the Truck class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    // Call the constructor of the parent class, Vehicle
    super();

    // Initialize properties of the Truck class
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.wheels = wheels;
    this.towingCapacity = towingCapacity;

    // Check if the wheels array has 4 elements
    if (wheels.length !== 4) {
      // If not, initialize the wheels array with 4 Wheel objects
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      // If yes, assign the wheels array to the wheels property
      this.wheels = wheels;
    }
  }

  // Implement the towCapacity method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    // Get the make and model of the vehicle
    const vehicleMakeModel = `${vehicle.make} ${vehicle.model}`;

    // Check if the vehicle's weight is less than or equal to the truck's towing capacity
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`The truck is towing the ${vehicleMakeModel}.`);
    } else {
      console.log(`The ${vehicleMakeModel} is too heavy to be towed by this truck.`);
    }
  }

  // Override the printDetails method from the Vehicle class
  override printDetails(): void {
    // Call the printDetails method of the parent class
    super.printDetails();

    // Log the details of the Truck
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight}`);
    console.log(`Top Speed: ${this.topSpeed}`);
    console.log(`Color: ${this.color}`);
    console.log(`Towing Capacity: ${this.towingCapacity}`);
    console.log(`Wheels: ${this.wheels.length}`);
  }
}

// Export the Truck class as the default export
export default Truck;