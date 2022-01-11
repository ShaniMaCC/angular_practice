import { Component, OnInit } from '@angular/core';
import { Images } from '../images';

@Component({
  selector: 'app-psd',
  templateUrl: './psd.component.html',
  styleUrls: ['./psd.component.css']
})
export class PsdComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public img1_3_1 = new Images(78,"../../assets/img/1-3-1.jpg","change password step1 to step2","Syspower");
  public img1_3_2 = new Images(79,"../../assets/img/1-3-2.jpg","change password step3","Syspower");
}
