import { Component, OnInit } from '@angular/core';
import { menSubmenu, womenSubmenu, childrenSubmenu, acessoriesSubmenu } from 'src/app/data';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menSubmenu: string[] = menSubmenu
  womenSubmenu: string[] = womenSubmenu
  childrenSubmenu: string[] = childrenSubmenu
  acessoriesSubmenu: string[] = acessoriesSubmenu

  isLoginOpen: boolean = false
  isRegisterOpen: boolean = false

  logoHM: string = "/assets/logo.png"

  
  faUserPlus = faUserPlus
  faArrowRight = faArrowRight
  constructor() {}

  openLoginModal(){
    this.isLoginOpen = true
  }

  openRegisterModal(){
    this.isRegisterOpen = true
  }

  closeLoginModal(){
    this.isLoginOpen = false
  }

  closeRegisterModal(){
    this.isRegisterOpen = false
  }

  ngOnInit(): void {
  }

}
