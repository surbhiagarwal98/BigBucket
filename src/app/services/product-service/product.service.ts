import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/product/product/product.component';
import { from } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products : Product[];

  constructor(private http:HttpClient) { 
     
  }
  
  getData() : Observable<Product[]>{
    let url = "https://fakestoreapi.com/products";
      return this.http.get<Product[]>(url);
      
  } 

  

  




  

    

  
}
