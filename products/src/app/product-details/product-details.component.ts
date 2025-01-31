import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import productsData from '../../assets/products.json';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  product: any;

  constructor(private route: ActivatedRoute) {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.product = productsData.products.find(
      (product: any) => product.id === id
    );
  }
}
