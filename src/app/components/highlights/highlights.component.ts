import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css']
})
export class HighlightsComponent implements OnInit {
  products: any[] = []
  constructor(private productsService: ProductsService) { }
 
  ngOnInit(): void {
    this.productsService.getHighlightedProducts().subscribe(products => (
      this.products = products
    ))
  }
}
