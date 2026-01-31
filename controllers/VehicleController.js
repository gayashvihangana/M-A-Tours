// Controller: VehicleController.js
// Manages interaction between VehicleModel and VehicleView

import VehicleModel from '../models/VehicleModel.js';
import VehicleView from '../views/VehicleView.js';

class VehicleController {
  constructor() {
    this.model = new VehicleModel();
    this.view = new VehicleView();
  }

  init(containerSelector) {
    this.view.setContainer(containerSelector);
    this.renderVehicles();
  }

  renderVehicles() {
    const vehicles = this.model.getAllVehicles();
    this.view.render(vehicles);
  }

  addVehicle(vehicleData) {
    const newVehicle = this.model.addVehicle(vehicleData);
    this.renderVehicles();
    return newVehicle;
  }

  getVehicle(id) {
    return this.model.getVehicleById(id);
  }
}

export default VehicleController;
