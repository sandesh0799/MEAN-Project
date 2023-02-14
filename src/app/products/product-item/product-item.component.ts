import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDataService } from '../service/product-data.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  products: any;
  constructor(private productDataService: ProductDataService) {}

  ngOnInit() {
    this.productDataService
      .getAllProducts()
      .subscribe((prod) => (this.products = prod));
  }
}
