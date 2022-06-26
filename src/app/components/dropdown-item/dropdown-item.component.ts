import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown-item',
  templateUrl: './dropdown-item.component.html',
  styleUrls: ['./dropdown-item.component.css']
})
export class DropdownItemComponent implements OnInit {
  @Input() title!: string 
  @Input() dropdownList!: string[] 

  isOpened: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  onMouseEnter() {
    this.isOpened = true
  }

  onMouseLeave() {
    this.isOpened = false
  }

}
