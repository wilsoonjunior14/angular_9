import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product = {
    name: "",
    price: 0
  };

  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id");
    this.productService.readById(id)
    .subscribe((product) => {
      this.product = product;
    });
  }

  cancel(){
    this.router.navigate(['/products']);
  }

  update(){
    this.productService.update(this.product)
    .subscribe((result) => {
      this.productService.showMessage('Product update with success');
      this.router.navigate(['/products']);
    });
  }



}
