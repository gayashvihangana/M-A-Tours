// Model: GalleryModel.js
// Handles gallery photo data

class GalleryModel {
  constructor() {
    this.photos = [
      {
        id: 1,
        image: "./assets/images/gallery-1.webp",
        alt: "Tour Photo 1"
      },
      {
        id: 2,
        image: "./assets/images/gallery-2.webp",
        alt: "Tour Photo 2"
      },
      {
        id: 3,
        image: "./assets/images/gallery-3.webp",
        alt: "Tour Photo 3"
      },
      {
        id: 4,
        image: "./assets/images/gallery-4.webp",
        alt: "Tour Photo 4"
      }
    ];
  }

  getAllPhotos() {
    return this.photos;
  }

  getPhotoById(id) {
    return this.photos.find(photo => photo.id === id);
  }

  addPhoto(photo) {
    const newPhoto = {
      id: this.photos.length + 1,
      ...photo
    };
    this.photos.push(newPhoto);
    return newPhoto;
  }
}

export default GalleryModel;
