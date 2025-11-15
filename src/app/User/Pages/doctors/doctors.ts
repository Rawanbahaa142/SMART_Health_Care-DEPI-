import { Component } from '@angular/core';
import { Global } from '../../../services/global';

@Component({
  selector: 'app-doctors',
  standalone: false,
  templateUrl: './doctors.html',
  styleUrl: './doctors.css'
})
export class Doctors  {
doctorName='';
country='All Countries';
specialty='All Specialties';
doctorsNum:any;
doctors:any[]=[];

constructor(private global:Global){
  this.doctors=global.getDoctors(this.doctorName, this.specialty, this.country);
  this.doctorsNum=this.doctors.length;
}

getDoctors(){
  this.doctors=this.global.getDoctors(this.doctorName, this.specialty, this.country);
  this.doctorsNum=this.doctors.length;
  console.log(this.doctorName , this.specialty , this.country);
}
}
