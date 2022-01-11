import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-template',
  templateUrl: './content-template.component.html',
  styleUrls: ['./content-template.component.css']
})
export class ContentTemplateComponent implements OnInit {
  @Input() styleCount : string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
