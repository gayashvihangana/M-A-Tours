// View: VehicleView.js
// Handles rendering of vehicle cards

class VehicleView {
  constructor() {
    this.container = null;
  }

  setContainer(selector) {
    this.container = document.querySelector(selector);
    return this;
  }

  render(vehicles) {
    if (!this.container) {
      console.error("Container not set for VehicleView");
      return;
    }

    this.container.innerHTML = vehicles.map(vehicle => `
      <div class="vehicle-card" data-id="${vehicle.id}">
        <img src="${vehicle.image}" alt="${vehicle.alt}" />
        <h3>${vehicle.name}</h3>
        <p>💺 Seats: ${vehicle.seats}</p>
      </div>
    `).join('');
  }

  clear() {
    if (this.container) {
      this.container.innerHTML = '';
    }
  }
}

export default VehicleView;
