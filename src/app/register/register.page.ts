import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor() { }
  selected: string;

  selected_option: string;
  ngOnInit() {
    this.selected = "phone"
    this.selected_option = "+34"
  }

}
