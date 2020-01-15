import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-apicall-demo',
  templateUrl: './apicall-demo.component.html',
  styleUrls: ['./apicall-demo.component.scss']
})
export class APICallDemoComponent implements OnInit {

  data:any;
  frm: FormGroup;
  payload: any;
  msg: string;

  constructor(private dataService:DataService,
              private fb:FormBuilder
    ) { }

  ngOnInit() {

    this.frm = this.fb.group({
      //title: ['', Validators.required, titleNameValidator()],
      title: ['', [Validators.required, this.dataService.valilateTitle]],
      body: ['', Validators.required]
    })

    // this.dataService.getFromTypicode().subscribe(
    //   res => {
    //     if(res.status === 200) {
    //       this.data = res.body;
    //     } else {
    //       this.data = 'Some Error'
    //     }
    //   } 
    // )
  }

  submit() {
    if(this.frm.valid) {
      this.payload = this.frm.value;
      this.payload.userId = 9;
      this.dataService.sendToTypicode(this.payload)
        .subscribe(
          res => {
            if(res.status === 201) {
              this.msg = res.statusText;
            } else {
              this.msg = 'Not Posted this time';
            }
          },
          err => {
            this.msg = err;
          }
        )
    } else {
        this.msg = 'Validation Error';
    }
  }

}
