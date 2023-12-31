import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url = "http://gsmktg.azurewebsites.net/api/v1/techlabs/test/students";

  constructor(private http: HttpClient) { }

  students() {
    return this.http.get(this.url);
  }

  studentById(id: any) {
    return this.http.get(this.url + "/" + id);
  }

  saveStudent(data: any) {
    return this.http.post(this.url, data);
  }

  updateStudent(data: any) {
    return this.http.put(this.url + "/" + data.id, data);
  }

  deleteStudent(id: any) {
    return this.http.delete(this.url + "/" + id);
  }
}
