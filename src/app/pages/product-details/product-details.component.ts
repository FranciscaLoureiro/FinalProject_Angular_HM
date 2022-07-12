import { Component, OnInit } from '@angular/core'
import { ProductsService } from 'src/app/services/products.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId!: number
  product: any

  constructor(
    private productsService: ProductsService, 
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['productId']
    this.productsService.getProduct(this.productId).subscribe(product => (
      this.product = product
    ))
  }

}
