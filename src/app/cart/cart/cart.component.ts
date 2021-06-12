import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product/product.component';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product-service/product.service';

export interface ICartItem{
  product : Product;
  qty : number;
  totalPrice : number;
}

export class CartItem implements ICartItem{
  constructor(public product : Product,public qty : number,public totalPrice : number){
    this.product = product;
    this.qty = qty;
    this.totalPrice = totalPrice;
    }
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productId : number;
  qty : number;
  totalPrice : number;
  products : Product[];
  
  cartItems : CartItem[];
  cartPrice : number;

  constructor(private activatedRouter: ActivatedRoute , private productService : ProductService, private cartService : CartService) { }

  async ngOnInit()  {
    this.activatedRouter.params.subscribe(data => 
      {this.productId = data.productId, this.qty = data.qty, this.totalPrice = data.totalPrice})

    await this.productService.getData().toPromise().then(data => 
      this.products = data);

    this.products.forEach((element)=>
       {if(element.id == this.productId){
          this.cartService.pushItem(new CartItem(element,this.qty, this.totalPrice));
          this.cartItems = this.cartService.getItemsList();
          console.log(this.cartItems)
       }
      }
      )
      
      this.cartPrice = this.cartService.currentVal
  }

  onOrderClick(value){
    console.log(value)
    if(value != null || value == ''){
      alert('Order placed successfully! Expect delivery in 3-5 days');
    }else{
      alert('Please enter delivery address');
    }
    
  }

}
