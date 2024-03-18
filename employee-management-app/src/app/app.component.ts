import { RouterOutlet } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})




export class AppComponent {
  title = 'employee-management-app';
  employees: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getEmployees(): void {

       
  }


}
