import { Component, OnInit } from '@angular/core';
import { Images } from '../images';

@Component({
  selector: 'app-suborder-filter',
  templateUrl: './suborder-filter.component.html',
  styleUrls: ['./suborder-filter.component.css']
})
export class SuborderFilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public img2_3_1 = new Images(31,"../../assets/img/2-3-1.jpg","filter order information step1 to step5","Syspower");
}
