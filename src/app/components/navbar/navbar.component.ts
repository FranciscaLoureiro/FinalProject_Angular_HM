import { Component, OnInit } from '@angular/core';
import { menSubmenu, womenSubmenu, childrenSubmenu, acessoriesSubmenu } from 'src/app/data';
import { 
  faArrowRight, faUser, faUserPlus, faArrowLeft, faClipboardList, faKey
} from '@fortawesome/free-solid-svg-icons';

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
  isUserLogged: boolean = false

  username!: string

  logoHM: string = "/assets/logo.png"

  
  faUserPlus = faUserPlus
  faArrowRight = faArrowRight
  faUser = faUser
  faArrowLeft = faArrowLeft
  faClipboardList = faClipboardList
  faKey = faKey

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

  loginUser(){
    this.isUserLogged = true
    this.setUser()
  }

  logoutUser() {
    localStorage.removeItem('user')
    this.isUserLogged = false
  }

  setUser() {
    const user: any = localStorage.getItem('user')

    if(user){
      this.isUserLogged = true
      this.username = JSON.parse(user).name
    }
  }

  ngOnInit(): void {
    this.setUser()
  }

}
