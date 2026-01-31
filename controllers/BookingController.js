// Controller: BookingController.js
// Manages interaction between BookingModel and BookingView

import BookingModel from '../models/BookingModel.js';
import BookingView from '../views/BookingView.js';

class BookingController {
  constructor() {
    this.model = new BookingModel();
    this.view = new BookingView();
  }

  init(containerSelector) {
    this.view.setContainer(containerSelector);
    this.renderBooking();
  }

  renderBooking() {
    const contactInfo = this.model.getContactInfo();
    this.view.render(contactInfo);
  }

  getContactInfo() {
    return this.model.getContactInfo();
  }
}

export default BookingController;
