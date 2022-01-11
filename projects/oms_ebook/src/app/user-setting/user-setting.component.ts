import { Component, OnInit } from '@angular/core';
import { Images } from '../images';

@Component({
  selector: 'app-user-setting',
  templateUrl: './user-setting.component.html',
  styleUrls: ['./user-setting.component.css']
})
export class UserSettingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public img1_4_1 = new Images(80,"../../assets/img/1-4-1.jpg","user setting steps","Syspower");
}
