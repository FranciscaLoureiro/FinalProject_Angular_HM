import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropdown-item',
  templateUrl: './dropdown-item.component.html',
  styleUrls: ['./dropdown-item.component.css']
})
export class DropdownItemComponent implements OnInit {
  @Input() title!: string 
  @Input() dropdownList!: string[] 

  mouseOverTitle: boolean = false
  mouseOverWindow: boolean = false

  isOpened: boolean = false

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.title)
  }

  onMouseEnterTitle() {
    this.mouseOverTitle = true
    this.checkIsOpeneded()
  }

  onMouseEnterWindow(){
    this.mouseOverWindow = true
    this.checkIsOpeneded()
  }

  onMouseLeaveTitle() {
    this.mouseOverTitle = false
    this.checkIsOpeneded()
  }

  onMouseLeaveWindow(){
    this.mouseOverWindow = false
    this.checkIsOpeneded()
  }

  checkIsOpeneded(){
    if(this.mouseOverTitle || this.mouseOverWindow){
      this.isOpened = true
    } else {
      this.isOpened = false
    }
  }

  navigate(item: string){
    if(item === "Todos") {
      this.router.navigate(['/products'])
    }
  }

}
