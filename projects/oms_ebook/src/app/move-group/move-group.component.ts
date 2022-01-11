import { Component, OnInit } from '@angular/core';
import { Images } from '../images';

@Component({
  selector: 'app-move-group',
  templateUrl: './move-group.component.html',
  styleUrls: ['./move-group.component.css']
})
export class MoveGroupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public img2_2_7 = new Images(23,"../../assets/img/2-2-7.jpg","move group information step1 to step5","Syspower");
}
