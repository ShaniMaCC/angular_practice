import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private dataSvc : DataService){}

  // data :any[] = [];
  data$ : Observable<any[]> = {} as Observable<any[]> ;
  ngOnInit(): void {
    // this.dataSvc.loadData().subscribe(data => {
    //   this.data = data;
    // })
    this.data$ = this.dataSvc.loadData();
    //這個方法要在template搭配 | async
  }
  title = 'willCourse';
}
