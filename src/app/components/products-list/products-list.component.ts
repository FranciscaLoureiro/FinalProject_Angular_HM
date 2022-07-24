import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  user: any
  products: any[] = []
  limit: number = 6
  types: string[] = []
  colors: string[] = []

  typeChecked!: any
  colorChecked!: any

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts()

    const user: any = localStorage.getItem('user')
    this.user = JSON.parse(user)
  }

  getProducts(){
    this.productsService.getProducts(this.typeChecked, this.colorChecked).subscribe(data => {
      this.products = data
      const typesArr: any = []
      const colorsArr: any = []

      if(this.colors.length === 0 || this.types.length === 0){
        data.map(product => {
          const type = product.type
          const color = product.color
  
          if(!typesArr.includes(type)){
            typesArr.push(type)
          }
  
          if(!colorsArr.includes(color)){
            colorsArr.push(color)
          }
          
          this.types = typesArr
          this.colors = colorsArr
        })
      }
    })
  }

  isTypeBoxChecked(type: string){
    return type === this.typeChecked
  }

  onChangeType(type: string){
    if(this.typeChecked === type){
      this.typeChecked = null
    } else {
      this.typeChecked = type
    }
    
    this.getProducts()
  }

  isColorBoxChecked(color: string){
    return color === this.colorChecked
  }

  onChangeColor(color: string){
    if(this.colorChecked === color){
      this.colorChecked = null
    } else {
      this.colorChecked = color
    }
    
    this.getProducts()
  }

  getMoreProducts(){
    this.limit += 6
  }

}
