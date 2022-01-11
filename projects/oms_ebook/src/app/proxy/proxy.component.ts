import { Component, OnInit } from '@angular/core';
import { Images } from '../images';

@Component({
  selector: 'app-proxy',
  templateUrl: './proxy.component.html',
  styleUrls: ['./proxy.component.css']
})
export class ProxyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public img2_2_8 = new Images(18,"../../assets/img/2-2-8.jpg","proxy information step1 to step6","Syspower");
}
