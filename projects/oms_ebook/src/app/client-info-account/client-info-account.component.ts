import { Component, OnInit } from '@angular/core';
import { Images } from '../images';

@Component({
  selector: 'app-client-info-account',
  templateUrl: './client-info-account.component.html',
  styleUrls: ['./client-info-account.component.css']
})
export class ClientInfoAccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public img3_1_5 = new Images(55,"../../assets/img/3-1-5.jpg","add client account information steps","Syspower");
  public img3_1_6 = new Images(56,"../../assets/img/3-1-6.jpg","edit client account information step1 to step4","Syspower");
  public img3_1_7 = new Images(57,"../../assets/img/3-1-7.jpg","edit client account information step5","Syspower");
  public img3_1_8 = new Images(58,"../../assets/img/3-1-8.jpg","delete client account information steps","Syspower");
}
