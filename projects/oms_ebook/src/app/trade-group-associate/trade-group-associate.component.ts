import { Component, OnInit } from '@angular/core';
import { Images } from '../images';

@Component({
  selector: 'app-trade-group-associate',
  templateUrl: './trade-group-associate.component.html',
  styleUrls: ['./trade-group-associate.component.css']
})
export class TradeGroupAssociateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public img3_2_5 = new Images(63,"../../assets/img/3-2-5.jpg","add trade group associtate account steps","Syspower");
  public img3_2_6 = new Images(64,"../../assets/img/3-2-6.jpg","delete trade group associtate account step1 to step3","Syspower");
  public img3_2_7 = new Images(65,"../../assets/img/3-2-7.jpg","delete trade group associtate account step4","Syspower");
}
