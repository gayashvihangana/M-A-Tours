// View: PlaceView.js
// Handles rendering of travel destination cards

class PlaceView {
  constructor() {
    this.container = null;
  }

  setContainer(selector) {
    this.container = document.querySelector(selector);
    return this;
  }

  render(places) {
    if (!this.container) {
      console.error("Container not set for PlaceView");
      return;
    }

    this.container.innerHTML = places.map(place => `
      <div class="place-card" data-id="${place.id}">
        <img src="${place.image}" alt="${place.alt}" />
        <h3>${place.emoji} ${place.name}</h3>
      </div>
    `).join('');
  }

  clear() {
    if (this.container) {
      this.container.innerHTML = '';
    }
  }
}

export default PlaceView;
