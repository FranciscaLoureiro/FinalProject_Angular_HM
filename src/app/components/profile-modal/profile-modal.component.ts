import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.css']
})
export class ProfileModalComponent implements OnInit {
  @Output() onCloseModal: EventEmitter<any> = new EventEmitter();
  @Output() onUpdateProfile = new EventEmitter<any>();
  @Input() profile: any
  profileForm!: FormGroup
  submitted = false
  updatedProfile!: any

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
  ) { }

  ngOnInit(): void {
    const { email, name, address, zipcode, country } = this.profile
    this.profileForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', [Validators.required]],
      zipcode: ['', [Validators.required]],
      country: ['', [Validators.required]],
    })

    this.profileForm.patchValue({
      name,
      email,
      address,
      zipcode,
      country
    })
  }

  closeModal(): void {
    this.onCloseModal.emit()
  }

  updateProfile(newProfile: any){
    this.onUpdateProfile.emit(newProfile)
  }

  onSubmit() {
    this.updateProfile(this.profileForm.value)
    this.usersService.updateUser(this.profile.id, this.profileForm.value).subscribe(data => {
      localStorage.setItem('user', JSON.stringify(data))
    })
    this.closeModal()
  }
}
