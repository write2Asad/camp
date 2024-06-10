import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }
  getStudents() {
    return [
      { name: "Arslan", age: 24, class: 12 },
      { name: "Ghufar", age: 23, class: 11 },
      { name: "Ayaz", age: 22, class: 10 }
    ];
  }
}
