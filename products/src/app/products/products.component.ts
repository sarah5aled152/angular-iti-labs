import { Component, OnInit } from '@angular/core';

import { ProductService } from '../services/product.service';

import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterModule, HttpClient],
  templateUrl: './products.component.html',
  styleUrls: ['./../app.component.css'],
})
export class ProductsComponent implements OnInit {
  products: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data.products;
      console.log(this.products);
    });
  }
}
