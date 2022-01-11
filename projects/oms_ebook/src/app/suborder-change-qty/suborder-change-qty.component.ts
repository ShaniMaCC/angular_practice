import { Component, OnInit } from '@angular/core';
import { Images } from '../images';

@Component({
  selector: 'app-suborder-change-qty',
  templateUrl: './suborder-change-qty.component.html',
  styleUrls: ['./suborder-change-qty.component.css']
})
export class SuborderChangeQtyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public img2_3_2 = new Images(27,"../../assets/img/2-3-2.jpg","sub order change qty information step1 to step4","Syspower");
  public img2_3_3 = new Images(28,"../../assets/img/2-3-3.jpg","sub order change qty information step5","Syspower");
}
