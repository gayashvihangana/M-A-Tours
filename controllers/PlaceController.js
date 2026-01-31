// Controller: PlaceController.js
// Manages interaction between PlaceModel and PlaceView

import PlaceModel from '../models/PlaceModel.js';
import PlaceView from '../views/PlaceView.js';

class PlaceController {
  constructor() {
    this.model = new PlaceModel();
    this.view = new PlaceView();
  }

  init(containerSelector) {
    this.view.setContainer(containerSelector);
    this.renderPlaces();
  }

  renderPlaces() {
    const places = this.model.getAllPlaces();
    this.view.render(places);
  }

  getPlace(id) {
    return this.model.getPlaceById(id);
  }
}

export default PlaceController;
