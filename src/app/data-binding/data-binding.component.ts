import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {
  title = "Data Binding Component";
  flag = false;

  @Input() userName;

  @Output() countChange:EventEmitter<number> = new EventEmitter();

  count = 0;
  
  constructor() { }

  btnClick() {
    this.title = "Changed Title";
    this.count++;
    this.countChange.emit(this.count);
  }

  ngOnInit() {
  }

}
