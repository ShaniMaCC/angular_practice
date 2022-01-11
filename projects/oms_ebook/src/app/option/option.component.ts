import { Component, OnInit } from '@angular/core';
import { Images } from '../images';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.css']
})
export class OptionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public img2_4_2 = new Images(50,"../../assets/img/2-4-2.jpg","option information step1 to step6","Syspower");
}
