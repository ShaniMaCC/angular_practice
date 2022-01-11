import { Component, OnInit } from '@angular/core';
import { Images } from '../images';

@Component({
  selector: 'app-suborder-detail',
  templateUrl: './suborder-detail.component.html',
  styleUrls: ['./suborder-detail.component.css']
})
export class SuborderDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public img2_2_15 = new Images(7,"../../assets/img/2-2-15.jpg","change qty information step1","Syspower");
  public img2_2_16 = new Images(8,"../../assets/img/2-2-16.jpg","change qty information step2 to step6","Syspower");
  public img2_2_17 = new Images(9,"../../assets/img/2-2-17.jpg","change qty information step7","Syspower");
  public img2_2_18 = new Images(10,"../../assets/img/2-2-18.jpg","change price information step1 to step6","Syspower");
  public img2_2_19 = new Images(11,"../../assets/img/2-2-19.jpg","delete tactics information step1 to step3","Syspower");
  public img2_2_20 = new Images(12,"../../assets/img/2-2-20.jpg","delete tactics information step4","Syspower");
  public img2_2_21 = new Images(13,"../../assets/img/2-2-21.jpg","delete sub order information step1 to step5","Syspower");
  public img2_2_22 = new Images(14,"../../assets/img/2-2-22.jpg","delete schedule information step1 to step2","Syspower");
  public img2_2_23 = new Images(15,"../../assets/img/2-2-23.jpg","delete schedule information step3","Syspower");
}
