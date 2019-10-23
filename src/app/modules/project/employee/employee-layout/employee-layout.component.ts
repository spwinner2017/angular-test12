import { Component, OnInit } from '@angular/core';
import { TabMode } from 'src/app/app-constants';

@Component({
  selector: 'app-employee-layout',
  templateUrl: './employee-layout.component.html',
  styleUrls: ['./employee-layout.component.css']
})
export class EmployeeLayoutComponent implements OnInit {

  tabMode: number // 0 for feedback and 1 for list.
  tabModeenum = TabMode;
  constructor() { }
  ngOnInit() {
    this.tabMode = 0//settig default tab mode.
  }
  // fuction for changing tab
  changeTab(tab: number) {
    this.tabMode = tab;
  }
 
}