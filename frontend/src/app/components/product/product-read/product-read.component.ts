import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() : void{
    this.productService.read()
    .subscribe(products => {
      this.products = products;
    });
  }

  delete(product: Product) : void{
    this.productService.delete(product.id)
    .subscribe((data) => {
      this.productService.showMessage('Product was deleted successfully');
      this.loadProducts();
    });
  }

}
