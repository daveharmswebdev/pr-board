'use strict'

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, FormBuilder, Validators} from '@angular/forms';
import { User } from '../interfaces/user.interface.ts';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public login_form: FormGroup;
  public submitted: boolean;
  public events: any[] = []

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.login_form = this._fb.group({
      email: ['', [<any>Validators.required, <any>Validators.pattern('[A-Za-z]{5}')]],
      password: ['',[<any>Validators.required, <any>Validators.minLength(7)] ]
    })
    
    this.subcribeToFormChanges();
  }

  login() {
    console.log(this.login_form.value)
  }

  subcribeToFormChanges() {
        const login_form_status_changes$ = this.login_form.statusChanges;
        const login_form_value_changes$ = this.login_form.valueChanges;
        
        login_form_status_changes$.subscribe(x => this.events.push({ event: 'STATUS_CHANGED', object: x }));
        login_form_value_changes$.subscribe(x => this.events.push({ event: 'VALUE_CHANGED', object: x }));
    }
}
