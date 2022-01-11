import { Component, OnInit } from '@angular/core';
import { Images } from '../images';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public img2_1_8 = new Images(44,"../../assets/img/2-1-8.jpg","futures information step1 to step3","Syspower");
  public img2_1_9 = new Images(45,"../../assets/img/2-1-9.jpg","futures information step4","Syspower");
  public img2_1_10 = new Images(46,"../../assets/img/2-1-10.jpg","option information step1 to step3","Syspower");
  public img2_1_11 = new Images(47,"../../assets/img/2-1-11.jpg","option information step4 to step5","Syspower");
  public img2_1_12 = new Images(48,"../../assets/img/2-1-12.jpg","batch_import information step1 to step5","Syspower");
}
