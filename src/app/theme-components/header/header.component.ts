import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onProfileClick(){
    this.router.navigateByUrl("account/login")
  }

  onIconClick(){
    this.router.navigateByUrl("/")
  }

  onProductClick(){
    this.router.navigateByUrl("product/allProducts")
  }

  openCart(){
    this.router.navigateByUrl("cart/cartDetails")
  }


}
