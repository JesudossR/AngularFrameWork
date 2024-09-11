import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user/user.service'; // Update the path as needed
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  studentForm: FormGroup;
  studentId: number;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.studentForm = this.fb.group({
      studId: ['', Validators.required],
      name: ['', Validators.required],
      gender: ['', Validators.required],
      department: ['', Validators.required],
      city: ['', Validators.required]
    });
    this.studentId = 0; // Initialize the studentId
  }

  ngOnInit(): void {
    // Get student ID from the route parameters
    this.studentId = this.route.snapshot.params['id'];
    this.loadStudent();
  }

  // Load the student data to populate the form
  loadStudent(): void {
    this.userService.getStudentById(this.studentId).subscribe((student) => {
      this.studentForm.patchValue(student);
    });
  }

  // Save or update the student data
  saveStudent(): void {
    if (this.studentForm.valid) {
      this.userService.updateStudent(this.studentId).subscribe(() => {
        alert('Student updated successfully!');
        this.router.navigate(['/students']); // Navigate back to the student list
      });
    }
  }
}
