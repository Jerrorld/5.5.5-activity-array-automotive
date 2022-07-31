//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class MercurySedan extends VehicleModule {
    constructor() {
        super (make, model, year, color, mileage);
        this.maximumPassengers = 5;
        // this.passenger already defined in class
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;

        loadPassenger (num) {
        if (this.passenger < this.maximumPassengers) {
            console.log("You may load more passenger/(s/)");
        } else {
            console.log("You may not load this many passengers. Please make sure there are no more than 5 passengers");
        }
    }
    // start() already in class  
    scheduleService() {
        if (this.mileage > 30000) {            
            this.scheduleService = true;
            console.log("It's service time!!!");
            return this.scheduleService;                      
        }
    }
    }
}
