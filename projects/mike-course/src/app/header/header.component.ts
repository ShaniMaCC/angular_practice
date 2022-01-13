import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchText = 'default';
  isHighlight = true;
  fontSize = 12;
  constructor() { }
  doSearch(evt : MouseEvent){
    this.fontSize +=2;
    this.searchText += '!';
    this.isHighlight = !this.isHighlight;
    console.log(evt.altKey)
  }

  ngOnInit(): void {
  }

}
