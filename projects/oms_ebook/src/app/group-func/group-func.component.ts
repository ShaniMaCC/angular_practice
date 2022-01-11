import { Component, OnInit } from '@angular/core';
import { Images } from '../images';

@Component({
  selector: 'app-group-func',
  templateUrl: './group-func.component.html',
  styleUrls: ['./group-func.component.css']
})
export class GroupFuncComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public img2_2_1 = new Images(19,"../../assets/img/2-2-1.jpg","add group information step1 to step4","Syspower");
  public img2_2_2 = new Images(20,"../../assets/img/2-2-2.jpg","change group information step1 to step5","Syspower");
  public img2_2_3 = new Images(21,"../../assets/img/2-2-3.jpg","delete group information step1 to step3","Syspower");
  public img2_2_4 = new Images(22,"../../assets/img/2-2-4.jpg","delete group information step4","Syspower");
}
