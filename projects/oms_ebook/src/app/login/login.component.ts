import { Component, OnInit } from '@angular/core';
import { Images } from '../images';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public img1_1_1 = new Images(75,"../../assets/img/1-1-1.jpg","normal login","Syspower");
  public img1_1_2 = new Images(76,"../../assets/img/1-1-2.jpg","first time login","Syspower");
}
