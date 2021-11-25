import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api/api.service';
import { ListProductsI } from '../../models/products.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: ListProductsI[] = [];

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.getAllProducts().subscribe(data => {
      console.log(data);
      this.products = data;
    })
  }

}
