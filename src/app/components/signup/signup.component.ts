import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {FormControl} from '@angular/forms'

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  providers:[DatePipe],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {



 formattedDate:String | null= null
  constructor(private datePipe: DatePipe) {}

  formatBirthDate(birthdate:Date):String |null {

    if (birthdate) {
      this.formattedDate = this.datePipe.transform(birthdate, 'dd MMMM yyyy');
    } else {
        this.formattedDate = '';
    }
    // console.log(this.formattedDate)
    return(this.formattedDate)
  }


signup(form: any) {
  form.value.dob=this.formatBirthDate(form.value.dob)
  console.log(form.value);
}

@Output() hideChange = new EventEmitter<boolean>();

  isHidden: boolean = false;

  toggleVisibility() {
    this.hideChange.emit(this.isHidden);
  }



}

