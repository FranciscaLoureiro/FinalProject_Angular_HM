import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() onCloseModal: EventEmitter<any> = new EventEmitter();
  registerForm!: FormGroup
  submitted = false

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService
  ) { }

  closeModal(): void {
    this.onCloseModal.emit()
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      address: ['', [Validators.required]],
      zipcode: ['', [Validators.required]],
      country: ['', [Validators.required]],
    })
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true

    if (this.registerForm.invalid) return

    this.usersService.registerUser(this.registerForm.value).subscribe(data => {
      localStorage.setItem('user', JSON.stringify(data))
      this.closeModal()
    })
  }
}
