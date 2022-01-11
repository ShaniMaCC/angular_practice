import { Component, OnInit } from '@angular/core';
import { Images } from '../images';

@Component({
  selector: 'app-delete-mainorder',
  templateUrl: './delete-mainorder.component.html',
  styleUrls: ['./delete-mainorder.component.css']
})
export class DeleteMainorderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public img2_2_9 = new Images(17,"../../assets/img/2-2-9.jpg","switch information step1 to step6","Syspower");
}
