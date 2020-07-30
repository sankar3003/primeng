import { UserComponent } from './../../@components/user/user.component';
import { Component, OnInit, ViewChild, AfterContentInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-customer-layout',
  templateUrl: './customer-layout.component.html',
  styleUrls: ['./customer-layout.component.css']
})
export class CustomerLayoutComponent implements OnInit, AfterViewInit {

  myname = "Ram prasanth"

  @ViewChild(UserComponent) child;
  messaeg: string;
  constructor() { }
  ngAfterViewInit(): void {
    this.messaeg = this.child.message;
    alert(this.messaeg)
  }


  ngOnInit() {
  }
  onChanegeName() {
    this.myname = 'Angular';
  }

  ngAfter
}
