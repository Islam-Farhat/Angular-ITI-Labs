import { Component } from '@angular/core';
import { Iproduct } from 'src/app/models/iproduct';
import { allProducts } from 'src/app/models/allProducts';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  products:Iproduct[]=allProducts;
}
