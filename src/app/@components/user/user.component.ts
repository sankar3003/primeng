import { UserService } from './../../@services/user.service';

import { Component, OnInit, Output, EventEmitter, OnChanges, OnDestroy, SimpleChanges, Input } from '@angular/core';

import { FormGroup, FormBuilder, FormArray } from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],

})
export class UserComponent implements OnInit {


  phoneForm: FormGroup;
  numbers: any = [];

  constructor(private fb: FormBuilder,
    private userService: UserService) {
    this.createForm()
  }
  createForm() {
    this.phoneForm = this.fb.group({
      name: null,
      phone: this.fb.array([
        this.fb.group({ number: null })
      ])
    })
  }

  get phones() {
    return this.phoneForm.get('phone') as FormArray
  }

  addPhone() {
    this.phones.push(this.fb.group({ number: null }))
  }


  ngOnInit(): void {
    // this.patchValue()
  }

  deleteAt(i) {
    this.phones.removeAt(i)
  }
  submit() {
    console.log(this.phoneForm.value)
  }
  patchValue() {
    this.userService.findNumbers().subscribe(res => {
      this.numbers = res;
      console.log(this.numbers)
      this.numbers.phone.forEach(element => {

        this.phones.push(this.fb.group({ number: element.number }))
      });
    }, error => {
      console.log("Error" + error)
    })


  }



}


