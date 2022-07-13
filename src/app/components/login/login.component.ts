import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() onCloseModal: EventEmitter<any> = new EventEmitter();
  constructor() { }

  closeModal(): void{
    this.onCloseModal.emit()
  }

  ngOnInit(): void {
  }

}
