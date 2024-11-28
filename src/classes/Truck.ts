// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

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
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    
    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
    this.towingCapacity = towingCapacity;
  }

  // Override the printDetails method from the parent class
  override printDetails(): void {
    // Call the printDetails method of the parent class
    super.printDetails();

    // Log the details of the Truck
    console.log(`VIN: ${this.vin}`); // Log the Vehicle Identification Number
    console.log(`Make: ${this.make}`); // Log the make of the truck
    console.log(`Model: ${this.model}`); // Log the model of the truck
    console.log(`Year: ${this.year}`); // Log the manufacturing year of the truck
    console.log(`Weight: ${this.weight}`); // Log the weight of the truck
    console.log(`Top Speed: ${this.topSpeed} mph`); // Log the top speed of the truck
    console.log(`Color: ${this.color}`); // Log the color of the truck
    console.log(`Towing Capacity: ${this.towingCapacity} lbs`); // Log the towing capacity of the truck
    console.log(`Wheels: ${this.wheels.length}`); // Log the number of wheels on the truck
  }

  // Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    // Get the make and model of the vehicle to be towed
    const vehicleMake = vehicle.make;
    const vehicleModel = vehicle.model;

    // Check if the vehicle's weight is within the towing capacity
    if (vehicle.weight <= this.towingCapacity) {
      // Log that the vehicle is being towed
      console.log(`Towing ${vehicleMake} ${vehicleModel}`);
    } else {
      // Log that the vehicle is too heavy to be towed
      console.log(`${vehicleMake} ${vehicleModel} is too heavy to be towed`);
    }
  }
}

// Export the Truck class as the default export
export default Truck;
