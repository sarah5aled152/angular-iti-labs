import { Routes } from '@angular/router';
import { ProductListComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'product', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: '**', component: NotFoundComponent },
];
