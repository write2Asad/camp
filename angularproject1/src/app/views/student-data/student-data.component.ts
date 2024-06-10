import { Component } from '@angular/core';
import { StudentService } from '../../student.service';
import { NgFor } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-student-data',
  standalone: true,
  imports: [NgFor, RouterOutlet, RouterModule],
  templateUrl: './student-data.component.html',
  styleUrl: './student-data.component.css',
  providers: [StudentService, NgFor]
})
export class StudentDataComponent {
  public students:any;
  constructor(std:StudentService) {
    this.students = std.getStudents();
    console.log(this.students);

}
}
