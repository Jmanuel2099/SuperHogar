import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent implements OnInit {

  fgV : FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.fgvalidationBuilder();
  }

  fgvalidationBuilder(){
    this.fgV = this.fb.group({
      first: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
      last: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
      email:['',[Validators.required, Validators.minLength(5), Validators.maxLength(30), Validators.email]],
      cell:['',[Validators.required, Validators.minLength(7),Validators.maxLength(10)]],
      request:['',[Validators.required,Validators.minLength(1),Validators.maxLength(5)]],
      message: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(200)]]
    });
  }

  get fg(){
    return this.fgV.controls;
  }

}
