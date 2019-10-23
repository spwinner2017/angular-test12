import { Injectable } from '@angular/core';
import { UserFeedback } from '../models/user-feedback';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  setLocalstorageItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  getLocalstorageItem(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }
  addFeedback(Feedback: any) {
    if (localStorage.getItem("feedback") === null) {
      const data = [];
      data.push(Feedback)
      this.setLocalstorageItem('feedback', data);
    } else {
      const feedbackData: UserFeedback[] = this.getLocalstorageItem('feedback');
      feedbackData.push(Feedback);
      this.setLocalstorageItem('feedback', feedbackData);
    }
  }
  updateFeedback(updatedItem: UserFeedback) {
    if (updatedItem) {
      const feedbackData: UserFeedback[] = this.getLocalstorageItem('feedback')
      let oldItem = feedbackData.filter(item => item.id === updatedItem.id)[0] || null;
      if (oldItem) {
        oldItem.isreviewd = updatedItem.isreviewd;
        oldItem.manegerrating = updatedItem.manegerrating;
        oldItem.managercomment = updatedItem.managercomment;
        console.log('updateFeedback', oldItem);
        this.setLocalstorageItem('feedback', feedbackData);
      }

    }
  }
  deleteItem(id) {
    const feedbackData: UserFeedback[] = this.getLocalstorageItem('feedback')
    const filteredfeedback = feedbackData.filter((item) => item.id !== id);
    this.setLocalstorageItem('feedback', filteredfeedback);
  }
}
