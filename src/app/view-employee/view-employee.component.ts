import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Classemployee } from '../classemployee';
import { EmployeeService } from '../service1/employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  varsha:Classemployee=new Classemployee(); 
  id:any;  

  constructor(private empser:ActivatedRoute, private emps:EmployeeService) { } 


  ngOnInit(): void {

    this.id=this.empser.snapshot.params['id'];
    this.varsha=new Classemployee();
    this.emps.viewEmployee(this.id).subscribe((response)=>{this.varsha=response})  
  }

}
