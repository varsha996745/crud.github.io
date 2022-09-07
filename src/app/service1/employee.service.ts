import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Classemployee } from '../classemployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl="http://localhost:8080/"

  constructor(private httpClient:HttpClient) { }

  updateEmployee(data:Classemployee,id:any){
    return this.httpClient.put(this.baseUrl+"employee/employees"+id,data)  
  }

  getAllEmployee(){

   return this.httpClient.get(this.baseUrl+"employee/employees");
    
  }

  createEmployee(data:any){

  return this.httpClient.post(this.baseUrl+"employee/",data);  

  }

  viewEmployee(id:any):Observable<Classemployee>{  
    return this.httpClient.get<Classemployee>(this.baseUrl+"employee/id/") 
  }

  deleteEmployee(id:Classemployee){
    return this.httpClient.delete("http://localhost:8080/employee/id/"+id,{responseType:'text'})
     

  }
  
}
