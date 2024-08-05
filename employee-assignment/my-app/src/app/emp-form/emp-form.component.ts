import { Component } from '@angular/core';
import { Employee } from '../types/employee';

@Component({
  selector: 'app-emp-form',
  templateUrl: './emp-form.component.html',
  styleUrls: ['./emp-form.component.css']
})
export class EmpFormComponent {
  form: Employee={
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    position: "",
    dateOfJoining: new Date()
    } 
  
   constructor(){
   }
   
   ngOnInit():void{}
  
   SubmitPhone(){
    console.log(this.form)
   }
  
}
