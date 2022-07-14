import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() onCloseModal: EventEmitter<any> = new EventEmitter();
  @Output() onLogUser: EventEmitter<any> = new EventEmitter();
  loginForm!: FormGroup
  submitted = false

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService
  ) { }

  closeModal(): void{
    this.onCloseModal.emit()
  }

  logUser(): void {
    this.onLogUser.emit()
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true

    if (this.loginForm.invalid) return

    this.usersService.loginUser(this.loginForm.value).subscribe(data => {
      if(data.length > 0){
        localStorage.setItem('user', JSON.stringify(data[0]))
        this.logUser()
        this.closeModal()
      }
    })
  }

}
