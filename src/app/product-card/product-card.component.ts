import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersService } from '../services/users.service';
import { faStar, faStarOfDavid } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: any
  @Input() user: any
  @Input() isWishlist!: boolean
  @Output() removeProduct = new EventEmitter<number>()

  isOnWishlist: boolean = false
  hover: boolean = false

  faStarEmpty = faStarOfDavid
  faStarFull = faStar

  constructor(private usersService: UsersService) { }

  addProductToWishlist(productId: number){
    const updatedWishlist = [...this.user.wishlist || [], productId]
    const updatedUser = { ...this.user, wishlist: updatedWishlist }

    this.isOnWishlist = true

    this.updateUser(updatedUser, productId)
  }

  removeProductFromWishlist(productId: number){
    const updatedWishlist = this.user.wishlist.filter((item: number) => item !== productId)
    const updatedUser = { ...this.user, wishlist: updatedWishlist }

    this.isOnWishlist = false

    this.updateUser(updatedUser, productId)
  }

  updateUser(updatedUser: any, productId: number){
    this.usersService.updateUser(this.user.id, updatedUser).subscribe()

    localStorage.setItem('user', JSON.stringify(updatedUser))
    this.removeProduct.emit(productId)
  }

  ngOnInit(): void {
    if(!this.isWishlist) {
      const user: any = localStorage.getItem('user')

      if(user){
        const wishlist = JSON.parse(user).wishlist
        this.isOnWishlist = wishlist.includes(this.product.id)
      }
    }
  }
}
