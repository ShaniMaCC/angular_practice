import { Component, OnInit } from '@angular/core';
import { Images } from '../images';

@Component({
  selector: 'app-list-func',
  templateUrl: './list-func.component.html',
  styleUrls: ['./list-func.component.css']
})
export class ListFuncComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public img2_2_5 = new Images(24,"../../assets/img/2-2-5.jpg","list function information step1 to step5","Syspower");
}
