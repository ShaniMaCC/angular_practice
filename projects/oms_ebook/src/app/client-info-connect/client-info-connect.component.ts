import { Component, OnInit } from '@angular/core';
import { Images } from '../images';

@Component({
  selector: 'app-client-info-connect',
  templateUrl: './client-info-connect.component.html',
  styleUrls: ['./client-info-connect.component.css']
})
export class ClientInfoConnectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public img3_1_1 = new Images(51,"../../assets/img/3-1-1.jpg","add client information steps","Syspower");
  public img3_1_2 = new Images(52,"../../assets/img/3-1-2.jpg","edit client information step1 to step3","Syspower");
  public img3_1_3 = new Images(53,"../../assets/img/3-1-3.jpg","edit client information step4","Syspower");
  public img3_1_4 = new Images(54,"../../assets/img/3-1-4.jpg","edit client information step1 to step3","Syspower");
}
