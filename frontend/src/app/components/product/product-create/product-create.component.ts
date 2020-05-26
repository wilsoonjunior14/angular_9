import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: "",
    price: null
  };

  constructor(private router: Router,
    private productService: ProductService) { }

  fazerAlgo: string = "";

  ngOnInit(): void {
  }

  create(){
    this.productService.create(this.product)
    .subscribe(() => {
      this.productService.showMessage('Produto criado com sucesso!');
      this.product = {name: "", price: null};
    });
  }

}
