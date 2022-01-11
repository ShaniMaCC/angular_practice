import { Component, OnInit } from '@angular/core';
import { Images } from '../images';

@Component({
  selector: 'app-trader-setting',
  templateUrl: './trader-setting.component.html',
  styleUrls: ['./trader-setting.component.css']
})
export class TraderSettingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public img3_3_1 = new Images(66,"../../assets/img/3-3-1.jpg","add trader account step1 to step3","Syspower");
  public img3_3_2 = new Images(67,"../../assets/img/3-3-2.jpg","add trader account step4","Syspower");
  public img3_3_3 = new Images(68,"../../assets/img/3-3-3.jpg","edit trader account step1 to step3","Syspower");
  public img3_3_4 = new Images(69,"../../assets/img/3-3-4.jpg","edit trader account step4","Syspower");
  public img3_3_5 = new Images(70,"../../assets/img/3-3-5.jpg","reset trader account steps","Syspower");
  public img3_3_6 = new Images(71,"../../assets/img/3-3-6.jpg","disable trader account step1 to step4","Syspower");
  public img3_3_7 = new Images(72,"../../assets/img/3-3-7.jpg","add trader account step5","Syspower");
  public img3_3_8 = new Images(73,"../../assets/img/3-3-8.jpg","delete trader account step1 to step3","Syspower");
  public img3_3_9 = new Images(74,"../../assets/img/3-3-9.jpg","delete trader account step4","Syspower");
}
