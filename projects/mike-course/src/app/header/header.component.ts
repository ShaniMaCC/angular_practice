import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() search = new EventEmitter<string>();


  @Input() searchText = '';
  @Output() searchTextChange = new EventEmitter<string>();

  isHighlight = true;
  fontSize = 12;
  constructor() { }
  doSearch(evt : MouseEvent){
    this.search.emit(this.searchText)
    this.fontSize +=2;
    // this.searchText += '!';
    this.isHighlight = !this.isHighlight;
    console.log(evt.altKey)
  }

  ngOnInit(): void {
  }
  textInput(){
    this.searchTextChange.emit(this.searchText);
  }

}
