import { Component, OnInit } from '@angular/core';
import { Images } from '../images';

@Component({
  selector: 'app-trade-group-setting',
  templateUrl: './trade-group-setting.component.html',
  styleUrls: ['./trade-group-setting.component.css']
})
export class TradeGroupSettingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public img3_2_1 = new Images(59,"../../assets/img/3-2-1.jpg","add trade group step1 to step3","Syspower");
  public img3_2_2 = new Images(60,"../../assets/img/3-2-.jpg","add trade group step4","Syspower");
  public img3_2_3 = new Images(61,"../../assets/img/3-2-3.jpg","edit trade group steps","Syspower");
  public img3_2_4 = new Images(62,"../../assets/img/3-2-4.jpg","delete trade group steps","Syspower");
}
