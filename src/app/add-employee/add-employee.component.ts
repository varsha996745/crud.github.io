import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeService } from '../service1/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  firstName:string="";
  lastName:string="";
  salary:number=0;

  constructor(private empService:EmployeeService) { }

  ngOnInit(): void {
  }
  savedData:any

createEmployee(fromValue:NgForm){
  const data={
      
    'firstName':fromValue.value.firstName,
    'lastName':fromValue.value.lastName,
    'salary': fromValue.value.salary
    }
this.empService.createEmployee(data).subscribe(data=>console.log(data));

console.log('data saved');

  }

}
