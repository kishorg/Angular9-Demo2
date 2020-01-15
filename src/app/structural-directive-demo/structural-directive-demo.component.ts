import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive-demo',
  templateUrl: './structural-directive-demo.component.html',
  styleUrls: ['./structural-directive-demo.component.scss']
})
export class StructuralDirectiveDemoComponent implements OnInit {

  //countries = ['India','China','USA','UK'];

  countries = [
                { code:'in', name:'India',population:'110B'},
                { code:'ch', name:'China',population:'120B'},
                { code:'us', name:'USA',population:'100B'},
                { code:'uk', name:'UK',population:'90B'}
              ];

  country = '';

  constructor() { }

  countryChange(e) {
    this.country = e.target.value;
  }
  refresh() {
    this.countries = [
      { code:'in', name:'India',population:'110B'},
      { code:'ch', name:'China',population:'120B'},
      { code:'us', name:'USA',population:'100B'},
      { code:'uk', name:'UK',population:'90B'}
    ];
  }



  ngOnInit() {
  }

}
