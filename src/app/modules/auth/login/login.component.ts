import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalstorageService } from '../../../service/localstorage.service';
import { userType } from '../../../app-constants'
import { AuthService } from 'src/app/service/auth.service';
export class UserLogin {
  username: string;
  password: string;
  role: number;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  constructor(
    private router: Router,
    private authService: AuthService,
    private locastorageService: LocalstorageService) { }
  ngOnInit() {
    this.createControls();
  }
  login() {
    if (this.loginFormGroup.invalid) { return; }
    const islogged = users.filter(item => item.username === this.loginFormGroup.get('username').value)[0] || null;
    if (!islogged) { return }
    const user = new UserLogin();
    user.username = this.loginFormGroup.get('username').value;
    user.password = this.loginFormGroup.get('password').value;
    if (islogged.role == userType.EMPLOYEE) {
      user.role = 1;
    } else {
      user.role = 2
    }

    // check for user login  
    if (this.authService.login(user)) {
      this.locastorageService.setLocalstorageItem('userData', user);
      // 1 =employee ,2= manager;
      if (user.role == 1) {
        console.log('if part exeuted')
        this.router.navigate(['/project'], { skipLocationChange: true });
      } else {
        this.router.navigate(['/project/review'], { skipLocationChange: true });
      }

    }
  }
  createControls() {
    this.loginFormGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    }
    )
  }
}

// dummy data 
export const users = [
  {
    username: 'employee@test.com',
    role: 1
  }, {
    username: 'manger@test.com',
    role: 2
  }

]