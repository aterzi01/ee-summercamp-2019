import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  searchProduct() {
    let input: any, filter: any, li: any, a: any, i: any, txtValue: any;
    input = document.getElementById('search-input');
    console.log(input.value);
    filter = input.value.toUpperCase();
    li = document.querySelectorAll('.product-container');

    console.log(li);
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName('a')[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = '';
      } else {
        li[i].style.display = 'none';
      }
    }
  }
}
