// Model: BookingModel.js
// Handles booking contact information

class BookingModel {
  constructor() {
    this.contactInfo = {
      phone: "+94724786262",
      whatsapp: "94760781959",
      location: "Hiriketiya, Dikwella, Sri Lanka"
    };
  }

  getContactInfo() {
    return this.contactInfo;
  }

  getPhoneNumber() {
    return this.contactInfo.phone;
  }

  getWhatsAppNumber() {
    return this.contactInfo.whatsapp;
  }

  getLocation() {
    return this.contactInfo.location;
  }
}

export default BookingModel;
