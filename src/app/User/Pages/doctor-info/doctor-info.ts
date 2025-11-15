import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Global } from '../../../services/global';

@Component({
  selector: 'app-doctor-info',
  standalone: false,
  templateUrl: './doctor-info.html',
  styleUrl: './doctor-info.css'
})
export class DoctorInfo {
  doctor:any;
  selectedDate: Date | null = null;
  availableHours: string[] = [];
constructor(private http: HttpClient , private route: ActivatedRoute , private global : Global){}
 ngOnInit(){
  const id=this.route.snapshot.paramMap.get('id');
  if(id){
    const doctorId=+id;
    this.doctor=this.global.getOneDoctor(doctorId);
  }
 }

 getAvailableHours(date:Date){
    this.selectedDate=date;
    if(!date){
      this.availableHours=[];
      return
    }
    const day=this.selectedDate.getDay();
    // this from doctor available hours api
    this.availableHours=['09:00','10:00']; 
    console.log(day); 
 }
}
