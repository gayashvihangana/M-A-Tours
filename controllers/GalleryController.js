// Controller: GalleryController.js
// Manages interaction between GalleryModel and GalleryView

import GalleryModel from '../models/GalleryModel.js';
import GalleryView from '../views/GalleryView.js';

class GalleryController {
  constructor() {
    this.model = new GalleryModel();
    this.view = new GalleryView();
  }

  init(containerSelector) {
    this.view.setContainer(containerSelector);
    this.renderGallery();
  }

  renderGallery() {
    const photos = this.model.getAllPhotos();
    this.view.render(photos);
  }

  addPhoto(photoData) {
    const newPhoto = this.model.addPhoto(photoData);
    this.renderGallery();
    return newPhoto;
  }

  getPhoto(id) {
    return this.model.getPhotoById(id);
  }
}

export default GalleryController;
