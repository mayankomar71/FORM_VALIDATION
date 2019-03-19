import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formcomponent',
  templateUrl: './formcomponent.component.html',
  styleUrls: ['./formcomponent.component.css']
})
export class FormcomponentComponent implements OnInit {

    myform = new FormGroup({
    Name: new FormControl('', Validators.required),
    phoneno: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl('', Validators.required)
    }),
  });

  constructor() { }
  get control() { return this.myform.controls; }

  onSubmit() {
    console.warn(this.myform.value);
    this.myform.patchValue({
    });
  }
  ngOnInit() {

  }
}
