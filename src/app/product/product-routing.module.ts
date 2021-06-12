import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductComponent } from './product/product.component';
import { SearchPageComponent } from './search-page/search-page.component';

const routes: Routes = [
  {path : "allProducts", component : ProductComponent},
  {path : "allProducts/product/:productId", component : ProductViewComponent},
  {path : "allProducts/search-page/:val", component : SearchPageComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class ProductRoutingModule { }
