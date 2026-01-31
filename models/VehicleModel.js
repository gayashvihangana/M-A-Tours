// Model: VehicleModel.js
// Handles vehicle data

class VehicleModel {
  constructor() {
    this.vehicles = [
      {
        id: 1,
        name: "Toyota KDH",
        image: "./assets/images/kdh.jpg",
        seats: 7,
        alt: "KDH Van"
      },
      {
        id: 2,
        name: "Toyota Prius",
        image: "./assets/images/prius.jpg",
        seats: 3,
        alt: "Prius Car"
      }
    ];
  }

  getAllVehicles() {
    return this.vehicles;
  }

  getVehicleById(id) {
    return this.vehicles.find(vehicle => vehicle.id === id);
  }

  addVehicle(vehicle) {
    const newVehicle = {
      id: this.vehicles.length + 1,
      ...vehicle
    };
    this.vehicles.push(newVehicle);
    return newVehicle;
  }
}

export default VehicleModel;
