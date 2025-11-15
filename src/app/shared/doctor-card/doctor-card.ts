import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-doctor-card',
  standalone: false,
  templateUrl: './doctor-card.html',
  styleUrl: './doctor-card.css',
})
export class DoctorCard {
  @Input() doctor: any;
  @Input() fontSize:any;
  constructor(private http : HttpClient , private router :Router){}

  token=localStorage.getItem('token')? true : false;
  goToDoctor(){
    if(!this.token) this.router.navigate(['/doctor-info',this.doctor.id]);
    else this.router.navigateByUrl('/login');
  }
}
