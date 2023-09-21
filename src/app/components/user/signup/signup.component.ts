import { Component } from '@angular/core';
import { Formio } from 'formiojs/types';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  form: any;

  constructor() { }

  ngOnInit(): void {
    Formio.builder(document.getElementById('formio'), 'https://rbdznpxcgfaydbc.form.io/registration')
      .then(form => {
        this.form = form;
      });
  }
}
