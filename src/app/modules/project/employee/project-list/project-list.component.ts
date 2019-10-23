import { Component, OnInit } from '@angular/core';
import { LocalstorageService } from 'src/app/service/localstorage.service';
import { UserFeedback } from 'src/app/models/user-feedback';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  userFeedbackArray: UserFeedback[] = [];
  constructor(private localstorageService: LocalstorageService) { }

  ngOnInit() {
    this.userFeedbackArray = this.localstorageService.getLocalstorageItem('feedback');
    console.log('userFeedbackArray', this.userFeedbackArray);
  }
  getStar(count) {
    let starts='';
    let i = 0
    while (i < count) {
      starts += '*';
      i++;
    }
    return starts;
  }
}