import { Component } from '@angular/core';
import { LoginComponent } from "../../components/login/login.component";
import { SignupComponent } from "../../components/signup/signup.component";
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-auth',
    standalone: true,
    templateUrl: './auth.component.html',
    styleUrl: './auth.component.scss',
    imports: [LoginComponent, SignupComponent,NgIf]
})
export class AuthComponent {
showSignUp: any;

hideChildren: boolean = false;

onChildHideChange(isHidden: boolean) {
  this.hideChildren = isHidden;
  console.log("hidden")
}

}
