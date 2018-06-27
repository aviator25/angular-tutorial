import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService} from '../products.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

	selectedProduct : Product;

	productSelected(product) {
		this.selectedProduct = product;
	}


  products : Product[] = [];

  constructor(public productsService:ProductsService) { }

  ngOnInit() {
    this.products = this.productsService.getProduct();
  }

  product: Product = {
  	id: 1,
  	name: 'Iphone',
  	price: 1999
  }

  // products: Product[] = [{
  // 	id: 1,
  // 	name: 'iPhone X',
  // 	price: 19999
  // },
  // {
  // 	id:2,
  // 	name: 'Samsung 10',
  // 	price: 2500
  // },
  // {
  // 	id:3,
  // 	name: 'Huawei P10',
  // 	price: 2099
  // }
  // ]

}
