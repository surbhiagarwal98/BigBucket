import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product/product.component';
import { MatGridListModule} from '@angular/material/grid-list';
import { ProductViewComponent } from './product-view/product-view.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { SearchPageComponent } from './search-page/search-page.component';

@NgModule({
  declarations: [
    ProductComponent,
    ProductViewComponent,
    SearchPageComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  exports: [
    ProductComponent
  ]
})
export class ProductModule {

}
