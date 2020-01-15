import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.scss']
})
export class ObservableDemoComponent implements OnInit {

  myObservable;
  arr = [];
  msg:string;

  constructor() { }

  ngOnInit() {

    this.myObservable = new Observable (
      observer => {
        setTimeout( () => {observer.next(50);}, 2000)
        setTimeout( () => {observer.next(27);}, 3000)
        //setTimeout( () => {observer.error('DB Closed');}, 3400)
        setTimeout( () => {observer.next(33);}, 4000)
        setTimeout( () => {observer.next(394);}, 5000)
        setTimeout( () => {observer.complete();}, 6000)
        
      }
    )
  }

  start() {
    this.myObservable.pipe(
      map(data => data * 2)
    )
    .subscribe(
      data => this.arr.push(data),
      err => this.msg = err,
      () => this.msg = 'All data received'
    )
  }
}
