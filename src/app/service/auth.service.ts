import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  login(userData): boolean {
    // httpclient code will be here.
    return true;
  }
}
