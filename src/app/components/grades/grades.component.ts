import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/product';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {
  @Input() productG: IProduct;
  sum = 0;
  ocjena = [];

  constructor() {}

  ngOnInit() {
    this.GradeArray();
  }

  GradeArray() {
    this.productG.grade.map(gr => this.ocjena.push(gr));
  }
  clicked(grade: number) {
    this.ocjena.push(grade);
  }

  getGrade() {
    this.sum = 0;
    this.ocjena.map(grade => (this.sum += grade));
    return this.sum / this.ocjena.length;
  }
}
