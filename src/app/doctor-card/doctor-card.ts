import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-doctor-card',
  standalone: false,
  templateUrl: './doctor-card.html',
  styleUrl: './doctor-card.css'
})
export class DoctorCard {
   @Input() doctor: any;
}
