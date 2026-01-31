// Model: PlaceModel.js
// Handles travel destination data

class PlaceModel {
  constructor() {
    this.places = [
      {
        id: 1,
        name: "Colombo Bandaranaike International Airport",
        emoji: "✈️",
        image: "./assets/images/airport.jpg",
        alt: "Colombo Bandaranaike International Airport"
      },
      {
        id: 2,
        name: "Hiriketiya Beach",
        emoji: "🌴",
        image: "./assets/images/hiriketiya.jpg",
        alt: "Hiriketiya Beach"
      },
      {
        id: 3,
        name: "Ella",
        emoji: "🌿",
        image: "./assets/images/ella.jpg",
        alt: "Ella"
      },
      {
        id: 4,
        name: "Mirissa",
        emoji: "🌊",
        image: "./assets/images/mirissa.jpg",
        alt: "Mirissa"
      },
      {
        id: 5,
        name: "Galle Fort",
        emoji: "🏯",
        image: "./assets/images/galle-fort.jpg",
        alt: "Galle Fort"
      },
      {
        id: 6,
        name: "Yala Safari",
        emoji: "🐘",
        image: "./assets/images/yala-safari.jpg",
        alt: "Yala Safari"
      },
      {
        id: 7,
        name: "Sigiriya Rock",
        emoji: "⛰️",
        image: "./assets/images/sigiriya.jpg",
        alt: "Sigiriya Rock"
      },
      {
        id: 8,
        name: "Dambulla Temple",
        emoji: "🛕",
        image: "./assets/images/dambulla-temple.jpg",
        alt: "Dambulla Temple"
      },
      {
        id: 9,
        name: "Bentota River Safari",
        emoji: "🚤",
        image: "./assets/images/bentota-safari.jpg",
        alt: "Bentota River Safari"
      },
      {
        id: 10,
        name: "Unawatuna Bay",
        emoji: "🏝️",
        image: "./assets/images/unawatuna.jpg",
        alt: "Unawatuna Bay"
      }
    ];
  }

  getAllPlaces() {
    return this.places;
  }

  getPlaceById(id) {
    return this.places.find(place => place.id === id);
  }
}

export default PlaceModel;
