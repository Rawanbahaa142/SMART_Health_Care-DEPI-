import { Component } from '@angular/core';

@Component({
  selector: 'app-interface',
  standalone: false,
  templateUrl: './interface.html',
  styleUrls: ['./interface.css']
})
export class Interface {
  doctors = [
    { imgUrl: 'doctor1.jpg', name: 'Dr. Jonathon Ronan', jobTitle: 'Cardiologist' },
    { imgUrl: 'doctor2.jpg', name: 'Dr. Walter White', jobTitle: 'Cardiologist' },
    { imgUrl: 'doctor3.jpg', name: 'Dr. Victor James', jobTitle: 'Cardiologist , Orthopedist' },
    { imgUrl: 'doctor5.jpg', name: 'Dr. Philips Rownd', jobTitle: 'Cardiologist , Gynocologist' },
    { imgUrl: 'doctor9.jpg', name: 'Dr. Jane Ronan', jobTitle: 'Cardiologist , Nutritionist , Orthopedist' }
  ];
}
