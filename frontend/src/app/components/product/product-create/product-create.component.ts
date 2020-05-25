import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private router: Router,
    private productService: ProductService) { }

  fazerAlgo: string = "";

  ngOnInit(): void {
    this.productService.showMessage('teste...');
  }

  create(){
    this.router.navigate(['/products']);
  }

}
