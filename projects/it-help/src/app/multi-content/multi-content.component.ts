import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-content',
  templateUrl: './multi-content.component.html',
  styleUrls: ['./multi-content.component.css']
})
export class MultiContentComponent implements OnInit {
  @Input() contentCount: string ="";
  constructor() { }

  ngOnInit(): void {
  }

}
