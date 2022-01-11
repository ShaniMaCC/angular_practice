import { Component, OnInit } from '@angular/core';
import { Images } from '../images';

@Component({
  selector: 'app-suborder-delete',
  templateUrl: './suborder-delete.component.html',
  styleUrls: ['./suborder-delete.component.css']
})
export class SuborderDeleteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public img2_3_6 = new Images(32,"../../assets/img/2-3-6.jpg","single delete order information step1 to step2","Syspower");
  public img2_3_7 = new Images(33,"../../assets/img/2-3-7.jpg","single delete order information step3","Syspower");
  public img2_3_8 = new Images(34,"../../assets/img/2-3-8.jpg","check delete order information step1 to step3","Syspower");
  public img2_3_9 = new Images(35,"../../assets/img/2-3-9.jpg","check delete order information step4","Syspower");
  public img2_3_10 = new Images(36,"../../assets/img/2-3-10.jpg","all delete order information step3","Syspower");
}
