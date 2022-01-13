import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {
  sitename = 'Hello World';
  keyword = 'demo'
  keyword2 = 'search'
  counter = 12;
  constructor() { }
  ngOnInit(): void {
    setTimeout(() => {
      this.sitename = 'hi!'
    }, 2000);
  }

  changeTitle(name :string , evt: MouseEvent){
    // console.log(evt);
    this.counter++;
    if(evt.ctrlKey){
      console.log(evt.clientX,evt.clientY);
    }

  }
  doSearch(str : string){
    this.keyword2 = str;
  }


}
