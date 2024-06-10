import { Component } from '@angular/core';
import { StudentService } from '../../student.service';
import { NgFor } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [NgFor, RouterOutlet, RouterModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css',
  providers: [StudentService, NgFor]
})
export class StudentListComponent {
  public students:any;
  constructor(std:StudentService) {
    this.students = std.getStudents();
    console.log(this.students);
  }
}
