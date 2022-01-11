import { Component, OnInit } from '@angular/core';
import { Images } from '../images';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public img2_2_6 = new Images(16,"../../assets/img/2-2-6.jpg","switch information step1 to step6","Syspower");
}
