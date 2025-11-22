import { Component } from '@angular/core';

@Component({
  selector: 'app-patients',
  standalone: false,
  templateUrl: './patients.html',
  styleUrl: './patients.css'
})
export class Patients {

  searchTerm: string = '';
  patients: any;
  filtered: any;

  constructor() {

  }

  ngOnInit() {
    this.patients = [{
    id : 1,
    name:'Ahmed Mohamed',
    age : 20,
    gender: 'male',
    phone: '01001435887',
  },{
    id : 2,
    name:'Ghada Mohamed',
    age : 45,
    gender: 'female',
    phone: '0120555887',
  },{
    id : 3,
    name:'Mohamed Ahmed',
    age : 29,
    gender: 'male',
    phone: '0124487796',
  },{
    id : 4,
    name:'Menna Mostafa',
    age : 27,
    gender: 'female',
    phone: '01001639984',
  }, {
     id : 5,
    name:'Sara Taha',
    age : 35,
    gender: 'female',
    phone: '0154989875',
  }];

  this.filtered = this.patients
  }
  


   getfilteredPatient() {
      return this.filtered =  this.patients.filter((item : any) =>
            item.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || item.phone.includes(this.searchTerm)      
      );
      }
}
