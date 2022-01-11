import { Component, OnInit } from '@angular/core';
import { Images } from '../images';

@Component({
  selector: 'app-remark',
  templateUrl: './remark.component.html',
  styleUrls: ['./remark.component.css']
})
export class RemarkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public img2_2_24 = new Images(25,"../../assets/img/2-2-24.jpg","remark information step1 to step2","Syspower");
  public img2_2_25 = new Images(26,"../../assets/img/2-2-25.jpg","remark information step3","Syspower");
}
