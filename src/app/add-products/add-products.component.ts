import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service'

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {


  constructor(public productsService: ProductsService) { }

  product =  {
  	name: '',
  	packaging: '',
  	price: ''
  }

  ngOnInit() {
  }

  saveProduct(){
  	this.productsService.addProducts(this.product).subscribe((response)=>{
  		alert('Success!!')
  		console.log(response)
  	}
  }

}
