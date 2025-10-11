import { Component } from '@angular/core';

@Component({
  selector: 'app-usernav',
  standalone: false,
  templateUrl: './usernav.html',
  styleUrl: './usernav.css'
})
export class Usernav {
  isCollapsed = false;
  isOffcanvasActive = false;

  toggleSidebar() {
    const screenWidth = window.innerWidth;

    if (screenWidth >= 992) {
      this.isCollapsed = !this.isCollapsed;
      this.isOffcanvasActive = false;
    } else {
      this.isOffcanvasActive = !this.isOffcanvasActive;
      this.isCollapsed = false;
    }
  }
}

