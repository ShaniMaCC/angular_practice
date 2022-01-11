import { Component, OnInit } from '@angular/core';
import { Images } from '../images';

@Component({
  selector: 'app-el-order',
  templateUrl: './el-order.component.html',
  styleUrls: ['./el-order.component.css']
})
export class ElOrderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public img2_1_1 = new Images(37,"../../assets/img/2-1-1.jpg","accept order information step1 to step4","Syspower");
  public img2_1_2 = new Images(38,"../../assets/img/2-1-2.jpg","accept order information step5","Syspower");
  public img2_1_3 = new Images(39,"../../assets/img/2-1-3.jpg","reject order information step1 to step3","Syspower");
  public img2_1_4 = new Images(40,"../../assets/img/2-1-4.jpg","reject order information step4","Syspower");
  public img2_1_5 = new Images(41,"../../assets/img/2-1-5.jpg","all accept order information step1 to step3","Syspower");
  public img2_1_6 = new Images(42,"../../assets/img/2-1-6.jpg","all accept order information step4","Syspower");
  public img2_1_7 = new Images(43,"../../assets/img/2-1-7.jpg","all reject order information step1 to step3","Syspower");
}
