import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ThemeComponentsModule} from './theme-components/theme-components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import { ProductModule } from './product/product.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {OAuthModule } from 'angular-oauth2-oidc';

import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThemeComponentsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FlexLayoutModule,
    HttpClientModule,
    ProductModule,
    MatGridListModule,
    MatCardModule, 
    MatFormFieldModule,
    OAuthModule.forRoot()
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

