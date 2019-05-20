import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/product';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  @Input() productC: IProduct;
  constructor() {}

  ngOnInit() {}
}
