import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product-service/product.service';

export interface Product{
  category : string,
  description  : string,
  id : number,
  image : string,
  price : number,
  title : string
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  products : Product[];

  constructor(private productService: ProductService, private router : Router) { 
    this.productService.getData().subscribe(data => this.products = data);
  }

  
  ngOnInit(){
  }

  viewProduct(productId){
    this.router.navigateByUrl(`products/allProducts/product/${productId}`);
  }
}
