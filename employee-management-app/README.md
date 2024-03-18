# Employee List Component

This Angular component is designed to display a list of employees. It includes functionalities for filtering, sorting, pagination, adding, and deleting employees.

## Employee Interface

The `Employee` interface defines the structure of an employee object with the following properties:

- `id`: The unique identifier of the employee (number)
- `firstName`: The first name of the employee (string)
- `lastName`: The last name of the employee (string)
- `age`: The age of the employee (number)
- `dob`: The date of birth of the employee (string)
- `email`: The email address of the employee (string)
- `salary`: The salary of the employee (string)
- `address`: The address of the employee (string)
- `imageUrl`: The URL of the employee's image (string)
- `contactNumber`: The contact number of the employee (string)

## Usage

To use the `EmployeeListComponent`:

1. Import the `EmployeeListComponent` into your Angular module.
2. Include the `<app-employee-list></app-employee-list>` tag in your HTML template.
3. Configure the `displayedColumns` array to specify which columns to display in the table.
4. Implement the `EmployeeService` to fetch employee data.
5. Optionally, customize the component to fit your application's requirements.

## Dependencies

This component requires the following Angular modules and dependencies:

- `MatTableModule`: Angular Material module for displaying tabular data.
- `MatSortModule`: Angular Material module for sorting table columns.
- `MatPaginatorModule`: Angular Material module for pagination.
- `MatFormFieldModule`: Angular Material module for form field components.
- `MatInputModule`: Angular Material module for input components.
- `MatIconModule`: Angular Material module for displaying icons.
- `FormsModule`: Angular module for two-way data binding with forms.

## Additional Notes

- The `EmployeeListComponent` includes functionalities for filtering, sorting, pagination, adding, and deleting employees.
- It uses Angular Material components for styling and functionality.
- Make sure to provide necessary backend services for fetching and managing employee data.
