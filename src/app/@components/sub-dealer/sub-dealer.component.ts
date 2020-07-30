import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-dealer',
  templateUrl: './sub-dealer.component.html',
  styleUrls: ['./sub-dealer.component.scss']
})
export class SubDealerComponent implements OnInit {
  modal2 = false
  constructor() { }

  ngOnInit() {
  }
  display: boolean = false;

  showDialog() {
    this.display = true;
  }

  dis() {
    this.modal2 = true
  }
}
