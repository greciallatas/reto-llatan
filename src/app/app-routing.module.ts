import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './components/login/login.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'products', component: ProductsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes), BrowserModule],
    exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [LoginComponent]
