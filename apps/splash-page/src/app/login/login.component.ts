import { Component, OnInit } from '@angular/core';
import config from '../../config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  localConfig = config;

  constructor() { }

  ngOnInit() {
  }

}
