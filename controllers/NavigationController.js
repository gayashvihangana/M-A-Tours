// Controller: NavigationController.js
// Manages navigation interactions

import NavigationView from '../views/NavigationView.js';

class NavigationController {
  constructor() {
    this.view = new NavigationView();
  }

  init() {
    this.view.init();
  }
}

export default NavigationController;
