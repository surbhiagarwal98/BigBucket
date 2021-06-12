import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeComponentsRoutingModule } from './theme-components-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SearchComponent } from './search/search.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    
  ],
  imports: [
    CommonModule,
    ThemeComponentsRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule
  ],
  exports : [
    HeaderComponent,
    FooterComponent,
    SearchComponent
  ]
})
export class ThemeComponentsModule { }
