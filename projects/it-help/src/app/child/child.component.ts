import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<boolean>();
  parentValueChange(val:boolean){
    this.newItemEvent.emit(val);
  }
  constructor() { }
  @Input() size!: number | string;                             // (1)
  @Output() sizeChange = new EventEmitter<number>();           // (2)

  dec() {                                                      // (3)
    this.resize(-1);
  }
  inc() {                                                      // (4)
    this.resize(+1);
  }

  resize(delta: number) {                                      // (5)
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }
  ngOnInit(): void {
  }

}
