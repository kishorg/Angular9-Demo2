import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products = [
    {pid: 1001, pname: 'Mouse', price: 4},
    {pid: 1002, pname: 'Keyboard', price: 10},
  ];
  constructor(private route:Router) { }

  ngOnInit() {
  }

  showDetails(product) {
    this.route.navigate(['contact/product-details', product.pid], {queryParams: {pname:product.pname}})
  }

}
