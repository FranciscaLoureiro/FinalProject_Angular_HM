import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() onCloseModal: EventEmitter<any> = new EventEmitter();
  constructor() { }

  closeModal(): void{
    this.onCloseModal.emit()
  }

  ngOnInit(): void {
  }

}
