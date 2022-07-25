import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {
  products: any[] = []
  productIdToDelete!: any
  isModalOpen: boolean = false
  filteredProducts: any[] = []

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(data => {
      this.products = data
      this.filteredProducts = data
    })
  }

  updateHighlightProduct(product: any){
    this.productsService
      .updateProduct(product.id, { ...product, isHighlight: !product.isHighlight })
      .subscribe()
  }

  openModal(productId: number){
    this.isModalOpen = true
    this.productIdToDelete = productId
  }

  closeModal() {
    this.isModalOpen = false
    this.productIdToDelete = null
  }

  deleteProduct(){
    if(this.productIdToDelete){
      this.productsService
      .deleteProduct(this.productIdToDelete)
      .subscribe()

      this.products = this.products.filter(product => product.id !== this.productIdToDelete)
    }

    this.closeModal()
  }

  onChangeInput(e: any){
    this.filteredProducts = this.products.filter(product => (
      product.name.toLowerCase().includes(e.value.toLowerCase()) ||
      product.brand.toLowerCase().includes(e.value.toLowerCase()) || 
      product.type.toLowerCase().includes(e.value.toLowerCase()) ||
      product.color.toLowerCase().includes(e.value.toLowerCase())
    ))
  }

}
