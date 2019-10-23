import { Component, OnInit } from '@angular/core';
import { UserFeedback } from 'src/app/models/user-feedback';
import { LocalstorageService } from 'src/app/service/localstorage.service';

@Component({
    selector: 'app-manager-layout',
    templateUrl: './manager-layout.component.html',
    styleUrls: ['./manager-layout.component.css']
})
export class ManagerLayoutComponent implements OnInit {

    userFeedbackArray: UserFeedback[] = [];
    constructor(private localstorageService: LocalstorageService) { }
    editMode = false;
    ngOnInit() {
        this.userFeedbackArray = this.localstorageService.getLocalstorageItem('feedback');
        console.log('userFeedbackArray', this.userFeedbackArray);
    }

    editRec(index) {
        this.userFeedbackArray[index].iseditable = true;
    }
    updateRec(index) {
        const item = this.userFeedbackArray[index];
        item.iseditable = false;
        item.isreviewd = true;
        this.localstorageService.updateFeedback(item);

        console.log('item', item);
    }
    deleteRec(id) {
        this.localstorageService.deleteItem(id);
        this.userFeedbackArray = this.localstorageService.getLocalstorageItem('feedback');
    }
}