import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  productId = 0;
  productName = '';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => this.productId=params['pid']
    )

    this.activatedRoute.queryParams.subscribe(
      params => this.productName=params['pname'] || 'No Data'
    )

  }

}
