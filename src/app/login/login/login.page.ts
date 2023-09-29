import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formularioLog!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.validaForm();
  }


  validaForm() {
    this.formularioLog = this.formBuilder.group({
      emailzito: ['', [Validators.required, Validators.email]],
      seinha: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  longrhar() { }


}
