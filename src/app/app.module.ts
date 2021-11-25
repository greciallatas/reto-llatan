import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { BannerComponent } from './templates/banner/banner.component';
import { ProductsComponent } from './components/products/products.component';
// import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    routingComponents,
    ProductsComponent
    // LoginComponent,
    // ProductsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
