import { Component, OnInit } from '@angular/core';
import { faFacebook, faInstagram, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faFacebook = faFacebook
  faInstagram = faInstagram
  faPinterest = faPinterest
  faTwitter = faTwitter
  faYoutube = faYoutube
  
  constructor() { }

  ngOnInit(): void {
  }

}
