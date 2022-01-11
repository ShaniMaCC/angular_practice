import { Component, OnInit } from '@angular/core';
import { Images } from '../images';

@Component({
  selector: 'app-futures',
  templateUrl: './futures.component.html',
  styleUrls: ['./futures.component.css']
})
export class FuturesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public img2_4_1 = new Images(49,"../../assets/img/2-4-1.jpg","futures information step1 to step4","Syspower");
}
