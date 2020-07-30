import { ThemeService } from './../../@services/theme.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { min } from 'rxjs/operators';
import { LoginService } from 'src/app/@services/login.service';
import { Router } from '@angular/router';
interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  path: any = "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
  modalRef: BsModalRef;
  loginForm: FormGroup;
  show: boolean;
  selectedCity1: City;
  token = "dummy"
  selectedCity2: City;
  cities1: { label: string; value: { id: number; name: string; code: string; }; }[];
  cities2: { name: string; code: string; }[];
  constructor(
    private modalService: BsModalService,
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
  ) {
    this.createLogin();

  }
  createLogin() {
    this.loginForm = this.fb.group({
      userName: [null, [Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: [null,

      ]
    })
  }

  password() {
    this.show = !this.show;
  }
  ngOnInit() {
    this.show = false;
    //this.openModal(templ\te: TemplateRef<any>)

  }


  login() {
    console.log(this.loginForm.value);


    if (this.loginForm.valid) {
      let req = this.loginForm.value;
      req.password = btoa(this.loginForm.get('password').value);
      this.loginService.authenticate(req).subscribe(res => {
        if (res) {
          localStorage.setItem("token", this.token)
          this.router.navigate(['/dealer-layout/sub-dealer'])
        }

      })
    }

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' })
    );
  }



}
