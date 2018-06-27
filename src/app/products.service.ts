import { Injectable } from '@angular/core';
import { Product } from './product'

@Injectable()
export class ProductsService {

	products: Product[] = [{
  	id: 1,
  	name: 'iPhone X',
  	price: 19999
  },
  {
  	id:2,
  	name: 'Samsung 10',
  	price: 2500
  },
  {
  	id:3,
  	name: 'Huawei P10',
  	price: 2099
  }
  ]

  getProduct(){
  	return this.products
  }

  constructor() { }

}
