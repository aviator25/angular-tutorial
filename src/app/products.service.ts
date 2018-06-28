import { Injectable } from '@angular/core';
import { Product } from './product';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductsService {

  productApi = 'http://localhost:8080/api/products'
	// products: Product[] = [{
 //  	id: 1,
 //  	name: 'iPhone X',
 //  	price: 19999
 //  },
 //  {
 //  	id:2,
 //  	name: 'Samsung 10',
 //  	price: 2500
 //  },
 //  {
 //  	id:3,
 //  	name: 'Huawei P10',
 //  	price: 2099
 //  }
 //  ]

 constructor( private http: HttpClient) { }

  getProduct(){
  	// return this.products
    return this.http.get(this.productApi)
  }

  

}
