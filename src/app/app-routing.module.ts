import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path : 'account' , 
  loadChildren : () => import('./account/account.module').then(module => module.AccountModule)},
  {path : 'products' , 
  loadChildren : () => import('./product/product.module').then(module => module.ProductModule)},
  {path : 'cart' , 
  loadChildren : () => import('./cart/cart.module').then(module => module.CartModule)},
  {path : '' ,redirectTo: '/products/allProducts', pathMatch: 'full'},
  {path : '**', redirectTo : '/products/allProducts'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
