import { Component, OnInit } from '@angular/core';
import { Images } from '../images';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public img2_2_10 = new Images(1,"../../assets/img/2-2-10.jpg","single split order information step1 to step4","Syspower");
  public img2_2_11 = new Images(2,"../../assets/img/2-2-11.jpg","single split order information step5 to step7","Syspower");
  public img2_2_12 = new Images(4,"../../assets/img/2-2-12.jpg","by qty split order information step1 to step4","Syspower");
  public img2_2_13 = new Images(5,"../../assets/img/2-2-13.jpg","by qty split order information step5 to step7","Syspower");
  public img2_2_14 = new Images(6,"../../assets/img/2-2-14.jpg","by time split order information step1 to step8","Syspower");

}
