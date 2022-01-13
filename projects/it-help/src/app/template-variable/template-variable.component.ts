import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-variable',
  templateUrl: './template-variable.component.html',
  styleUrls: ['./template-variable.component.css']
})
export class TemplateVariableComponent implements OnInit {

  constructor() { }
  submitMessage: string = '';                 // (1)

  onSubmit($event: any) {                     // (2)
    this.submitMessage = $event.form.value.name;
  }
  ngOnInit(): void {
  }

}
