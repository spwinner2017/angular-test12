import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProjectList } from 'src/app/models/porject-list';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserFeedback } from 'src/app/models/user-feedback';
import { LocalstorageService } from 'src/app/service/localstorage.service';
import { uuidv4 } from 'src/app/helper/uuid-generate';


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  @Output() tabChange = new EventEmitter();
  projectList: ProjectList[] = ProjectData;
  feedbackFormGrop: FormGroup;
  rating: number;
  defaultRating = 3;

  constructor(private localstorageService: LocalstorageService) {

  }
  ngOnInit() {
    this.rating = this.defaultRating;
    this.createControls();
    console.log('projectList', this.projectList);

  }
  // handel user rating.
  ratingComponentClick(rating: number): void {
    this.rating = rating;
  }
  // create reactive from controls.
  createControls() {
    this.feedbackFormGrop = new FormGroup({
      empname: new FormControl('', [Validators.required]),
      empid: new FormControl('', [Validators.required]),
      project: new FormControl('', [Validators.required]),
      comment: new FormControl('', [Validators.required]),
    }
    );
  } //end of fucntion

  // function for submit feedback
  submitFeedback() {
    if (this.feedbackFormGrop.valid) {
      const feedback = new UserFeedback();
      feedback.comment = this.feedbackFormGrop.get('comment').value;
      feedback.rating = this.rating;
      feedback.empname = this.feedbackFormGrop.get('empname').value;
      feedback.empid = this.feedbackFormGrop.get('empid').value;
      feedback.projectname = this.feedbackFormGrop.get('project').value.projectName;
      feedback.projectid = this.feedbackFormGrop.get('project').value.id;
      feedback.managercomment = null;
      feedback.manegerrating = null;
      feedback.isreviewd = true;
      feedback.id = uuidv4();
      this.localstorageService.addFeedback(feedback);
      this.feedbackFormGrop.reset();
      this.tabChange.emit(1); //calling event emmiter
    } else {
      console.log(this.feedbackFormGrop.invalid);
    }
  }
} // end of class
const ProjectData = [
  {
    projectName: "Demo Project1",
    id: "prj00120"
  },
  {
    projectName: "Demo Project2",
    id: "prj00121"
  },
  {
    projectName: "Demo Project3",
    id: "prj00122"
  }
];
