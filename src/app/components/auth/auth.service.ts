import { Injectable } from "@angular/core";

@Injectable({'providedIn': 'root'})
export class AuthService {
  private userId: string = '1';
  constructor() {
  }
  getAuth() {
    return this.userId;
  }
}