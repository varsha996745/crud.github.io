import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Classemployee } from '../classemployee';
import { EmployeeService } from '../service1/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(private service:EmployeeService, private route:ActivatedRoute,
    private rd:Router) { }

    updateEmp(){
      
    this.service.createEmployee(this.data).subscribe((response)=>{console.log(response)
      this.rd.navigate([''])},(err)=>{console.log(err)});

    }

    updateempser(){
      this.service.viewEmployee(this.id).subscribe((response)=>{console.log(response)},(err)=>{console.log(err)});

    }

    id:any;
    data:Classemployee=new Classemployee();

  ngOnInit(): void {

    this.updateempser();


   

    this.route.params.subscribe((params)=>{this.id=params['id']});  


    
  }

}
