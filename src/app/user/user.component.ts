import { Component } from '@angular/core';
import { UserService } from './user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-list',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users: any[] = [];
  router: any;
  studentForm: FormGroup;
  constructor(private fb: FormBuilder,private userService: UserService) {
    this.studentForm = this.fb.group({
      studId: ['', Validators.required],
      name: ['', Validators.required],
      gender: ['', Validators.required],
      department: ['', Validators.required],
      city: ['', Validators.required]
    });
  }
 
  ngOnInit(): void {
    this.getUsers();
  }
  onSubmit() {
    if (this.studentForm.valid) {
      const student = this.studentForm.value;
      // Handle form submission logic, e.g., calling a service to save the student
      this.userService.addStudent(student).subscribe(() => {
        alert('Student added successfully!');
        this.loadStudents(); // Refresh the student list
        this.studentForm.reset(); // Reset the form
      });
    }
  }

  loadStudents(): void {
    this.userService.getStudents().subscribe((students) => {
      this.users = students;
    });
  }
  getUsers(): void {
    this.userService.getStudents().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users', error);
      }
    );
  }
  saveStudent(studId: number): void{
    // Navigate to the edit page with student ID
    this.router.navigate(['/students/edit', studId]);
  }

  // Delete student method
  deleteStudent(studId: number): void {
    if (confirm('Are you sure you want to delete this student?')) {
      this.userService.deleteStudent(studId).subscribe(() => {
        alert('Student deleted successfully.');
        this.getUsers(); // Reload the student list after deletion
      });
    }
  }
}
 