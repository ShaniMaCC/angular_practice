import { Component, OnInit } from '@angular/core';
import { Images } from '../images';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public img1_2_1 = new Images(77,"../../assets/img/1-2-1.jpg","normal logout steps","Syspower");
}
