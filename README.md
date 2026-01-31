# M & A Tours and Travels - MVC Architecture

This website has been refactored to follow the **Model-View-Controller (MVC)** architectural pattern for better organization, maintainability, and scalability.

## 🏗️ Project Structure

```
M-A-Tours/
├── models/                    # Data layer
│   ├── VehicleModel.js       # Vehicle data management
│   ├── PlaceModel.js         # Travel destinations data
│   ├── GalleryModel.js       # Gallery photos data
│   └── BookingModel.js       # Contact information data
│
├── views/                     # Presentation layer
│   ├── VehicleView.js        # Renders vehicle cards
│   ├── PlaceView.js          # Renders place cards
│   ├── GalleryView.js        # Renders gallery photos
│   ├── BookingView.js        # Renders booking buttons
│   └── NavigationView.js     # Handles navigation
│
├── controllers/               # Application logic layer
│   ├── VehicleController.js  # Controls vehicle interactions
│   ├── PlaceController.js    # Controls place interactions
│   ├── GalleryController.js  # Controls gallery interactions
│   ├── BookingController.js  # Controls booking interactions
│   └── NavigationController.js # Controls navigation
│
├── assets/                    # Static assets
│   └── images/               # Image files
│
├── app.js                    # Main app entry point
├── app-gallery.js            # Gallery page entry point
├── index.html                # Main page
├── gallery.html              # Gallery page
├── styles.css                # Stylesheets
└── README.md                 # This file
```

## 📋 MVC Architecture Explained

### **Model** (Data Layer)
Models handle all data operations and business logic:
- `VehicleModel`: Manages vehicle data (Toyota KDH, Prius)
- `PlaceModel`: Manages travel destinations
- `GalleryModel`: Manages photo gallery items
- `BookingModel`: Manages contact information

### **View** (Presentation Layer)
Views are responsible for rendering data to the DOM:
- `VehicleView`: Renders vehicle cards
- `PlaceView`: Renders destination cards
- `GalleryView`: Renders photo gallery
- `BookingView`: Renders booking buttons with contact info
- `NavigationView`: Handles smooth scrolling navigation

### **Controller** (Application Logic)
Controllers coordinate between Models and Views:
- Fetch data from Models
- Pass data to Views for rendering
- Handle user interactions
- Update the UI dynamically

## 🚀 How It Works

1. **Initialization**: When the page loads, `app.js` initializes all controllers
2. **Data Fetching**: Controllers request data from Models
3. **Rendering**: Controllers pass data to Views for DOM rendering
4. **User Interaction**: Controllers listen for user actions and update accordingly

## 💡 Benefits of MVC Architecture

✅ **Separation of Concerns**: Each layer has a specific responsibility  
✅ **Maintainability**: Easy to update and debug individual components  
✅ **Scalability**: Simple to add new features without affecting existing code  
✅ **Reusability**: Models and Views can be reused across different pages  
✅ **Testability**: Each component can be tested independently  

## 🔧 Adding New Features

### Adding a New Vehicle:
```javascript
const vehicleController = new VehicleController();
vehicleController.addVehicle({
  name: "New Vehicle",
  image: "./assets/images/new-vehicle.jpg",
  seats: 5,
  alt: "New Vehicle"
});
```

### Adding a New Photo:
```javascript
const galleryController = new GalleryController();
galleryController.addPhoto({
  image: "./assets/images/new-photo.webp",
  alt: "New Photo"
});
```

## 📱 Pages

- **index.html**: Main landing page with vehicles, places, and booking
- **gallery.html**: Full gallery page

## 🌐 Contact Information

- **Phone**: +94 724786262
- **WhatsApp**: +94 760781959
- **Location**: Hiriketiya, Dikwella, Sri Lanka

## 📝 Notes

- All JavaScript files use ES6 modules (`import`/`export`)
- HTML files reference `app.js` and `app-gallery.js` with `type="module"`
- Data is currently stored in memory but can easily be connected to an API or database

---

Experience the beauty of Sri Lanka with M & A Tours & Travels! 🌴
