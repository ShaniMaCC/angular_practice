import { Component, OnInit } from '@angular/core';
import { Images } from '../images';

@Component({
  selector: 'app-suborder-change-price',
  templateUrl: './suborder-change-price.component.html',
  styleUrls: ['./suborder-change-price.component.css']
})
export class SuborderChangePriceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public img2_3_4 = new Images(29,"../../assets/img/2-3-4.jpg","sub order change price information step1 to step3","Syspower");
  public img2_3_5 = new Images(30,"../../assets/img/2-3-5.jpg","sub order change price information step4","Syspower");
}
