import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product-service/product.service';
import { Product } from '../product/product.component';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})

export class ProductViewComponent implements OnInit {

  productId : number;
  products : Product[];
  product : Product;
  qty : number;
  totalPrice : number;

  constructor(private activatedRouter: ActivatedRoute, private productService : ProductService, private router: Router) { 
    
  }
 
  async ngOnInit() {
    await this.productService
    .getData()
    .toPromise().then(data => 
      this.products = data)
    this.productId = this.activatedRouter.snapshot.params.productId;
    this.products.forEach( (element) => {
      if(element.id == this.productId){
        this.product = element;
      }
  });
  }
  
  

  setQty(qty){
    this.qty = qty;
    this.totalPrice = this.qty * this.product.price;
  }

  addToCart(){
    this.router.navigateByUrl(`cart/cartDetails/${this.productId}/${this.qty}/${this.totalPrice})`);
  }
}
