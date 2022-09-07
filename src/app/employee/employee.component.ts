import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Classemployee } from '../classemployee';
import { EmployeeService } from '../service1/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private empService:EmployeeService, private varsha:ActivatedRoute,
    private aarti:Router) { }

  employee:any;
  variable:any;
  // id:any;

  urlData:any;    
  // Classemployee=new Classemployee();


  deleteempser(id:Classemployee){
    this.empService.deleteEmployee(id).subscribe((response)=>{this.variable=response},(err)=>{console.log(err)});

  }  

 

 

 


  ngOnInit(): void {
    this.varsha.params.subscribe((params)=>{this.urlData=params['id']});

    
    this.empService.getAllEmployee().subscribe((data)=>{this.employee=data},(err)=>{console.log(err)});

     
    // this.empService.deleteEmployee(this.variable).subscribe((params)=>{this.variable=params['id']});
     }


}     
