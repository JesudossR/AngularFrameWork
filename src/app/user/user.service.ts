import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'http://localhost:5001/api';
  // private url = ' http://localhost:5261/api/TodoItems';
  httpClient: any;

  // private url = 'http://localhost:8080/api/users/';

  constructor(private http: HttpClient) { }

  getStudents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/students`);
  }
  // getStudentById(id: number): Observable<any> {
  //   const url = `${this.url}/${id}`;
  //   return this.http.get<any>(url);
  // }
  // updateStudent(id: number, student: any): Observable<any> {
  //   const url = `${this.url}/${id}`;
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   return this.http.put<any>(url, student, { headers });
  // }
  getStudentById(id: number): Observable<any> {
    return this.http.get<any>(`/api/students/${id}`);
  }
  
  updateStudent(id?: number, studentData?: any): Observable<any> {
    return this.http.put(`/api/students/${id}`, studentData);
  }
  
  addStudent(student: any): Observable<any> {
    return this.http.post<any>(`${this.url}/students`, student);
  }
  deleteStudent(studId: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/students/${studId}`);
  }
}