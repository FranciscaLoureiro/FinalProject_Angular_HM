import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product: any
  @Input() user: any
  @Output() removeProduct = new EventEmitter<number>()

  constructor(private usersService: UsersService) { }

  removeProductFromWishlist(productId: number){
    const updatedWishlist = this.user.wishlist.filter((item: number) => item !== productId)
    const updatedUser = { ...this.user, wishlist: updatedWishlist }

    this.usersService.updateUser(this.user.id, updatedUser).subscribe()

    localStorage.setItem('user', JSON.stringify(updatedUser))

    this.removeProduct.emit(productId)
  }

  ngOnInit(): void {
  }

}
