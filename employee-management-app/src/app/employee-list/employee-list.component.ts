import { Component , NgModule, ViewChild} from '@angular/core';
import { EmployeeService } from '../employee.service';                                                                                                   
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import {
  NgIf,
  NgFor,
  UpperCasePipe,
} from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  dob: string;
  email: string;
  salary: string;
  address: string;
  imageUrl: string;
  contactNumber: string;
}



@Component({
  selector: 'app-employee-list',
  standalone: true,

  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
  imports:[
    NgIf,
    NgFor,
    UpperCasePipe,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule
  ],
})
export class EmployeeListComponent {

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'age', 'dob', 'email', 'salary', 'address', 'imageUrl', 'contactNumber'];
  dataSource!:MatTableDataSource<any>;

  newEmployee: any = {};

  @ViewChild('paginator') paginator! : MatPaginator; 
  @ViewChild(MatSort) matSort! : MatSort;

  constructor(private service: EmployeeService) {}

  

  ngOnInit() {
    this.service.getUserData().subscribe((response:any) =>{
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
    })
  }

  filterData($event : any){
    this.dataSource.filter = $event.target.value;
  }

  deleteEmployee(employee: Employee): void {
    const index = this.dataSource.data.indexOf(employee);
    this.dataSource.data.splice(index, 1);
    this.dataSource._updateChangeSubscription(); // Refresh the table
  }

  // Frontend-only Addition
  addEmployee(): void {
    this.dataSource.data.push(this.newEmployee);
    this.dataSource._updateChangeSubscription(); // Refresh the table
  }

  



}
