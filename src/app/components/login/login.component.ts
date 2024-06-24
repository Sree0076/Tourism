import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor( private router: Router) {}
  loginform = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('',[Validators.required,Validators.minLength(4),]),

  });

  @Output() hideChange = new EventEmitter<boolean>();

  isHidden: boolean = true;

  toggleVisibility() {
    this.hideChange.emit(this.isHidden);
  }
  onSubmit(): void {
    if (this.loginform.valid) {

      this.router.navigate(['/']);
    }
  }
}
