import { Component, OnInit } from '@angular/core';
import { faPenSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {
  profile: any
  isProfileOpen: boolean = false

  faPenSquare = faPenSquare

  constructor() { }

  openProfileModal() {
    this.isProfileOpen = true
  }

  closeProfileModal() {
    this.isProfileOpen = false
  }

  updateProfile(newProfile: any){
    console.log('boas')
    this.profile = newProfile
  }

  ngOnInit(): void {
    this.getUser()
  }

  getUser(){
    const profileString: any = localStorage.getItem('user')
    this.profile = JSON.parse(profileString)
  }

}
