import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-wishlist-list',
  templateUrl: './wishlist-list.component.html',
  styleUrls: ['./wishlist-list.component.css']
})
export class WishlistListComponent implements OnInit {
  userWishlist: any
  products: any[] = []
  user: any

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.updateWishlist()

    this.productsService.getWishlistProducts(this.userWishlist).subscribe(data => {
      this.products = data
    })
  }

  updateWishlist(){
    const user: any = localStorage.getItem('user')
    this.user = JSON.parse(user)
    this.userWishlist = JSON.parse(user).wishlist
  }

  removeProduct(productId: number){
    this.updateWishlist()
    this.products = this.products.filter((product:any) => product.id !== productId)
  }

}
