import { Injectable } from '@angular/core';
import { CartItem } from '../cart/cart/cart.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems : CartItem[] =[];
  currentVal : number = 0;

  constructor() { }

  pushItem(item){
    this.cartItems.push(item);
    this.currentVal = this.currentVal + item.product.price * item.qty
  }

  getItemsList(){
    return this.cartItems;
  }

  getTotalPrice(){
    return this.currentVal
  }
}
