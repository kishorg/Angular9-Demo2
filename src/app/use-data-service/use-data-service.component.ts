import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-use-data-service',
  templateUrl: './use-data-service.component.html',
  styleUrls: ['./use-data-service.component.scss']
})
export class UseDataServiceComponent implements OnInit {
  un:string;
  unFormService:string;

  constructor(private dataservice: DataService) { }

  setValue() {
    this.dataservice.setUserName(this.un);
  }
  
  getValue() {
    this.unFormService = this.dataservice.getUserName();
  }

  ngOnInit() {
  }

}
