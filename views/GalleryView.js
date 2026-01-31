// View: GalleryView.js
// Handles rendering of gallery photos

class GalleryView {
  constructor() {
    this.container = null;
  }

  setContainer(selector) {
    this.container = document.querySelector(selector);
    return this;
  }

  render(photos) {
    if (!this.container) {
      console.error("Container not set for GalleryView");
      return;
    }

    this.container.innerHTML = photos.map(photo => `
      <div class="gallery-card" data-id="${photo.id}">
        <img src="${photo.image}" alt="${photo.alt}" />
      </div>
    `).join('');
  }

  clear() {
    if (this.container) {
      this.container.innerHTML = '';
    }
  }
}

export default GalleryView;
