import { Injectable } from "@angular/core";
import { User } from "../../models/user";
import { Resolve } from "@angular/router";

@Injectable({'providedIn': 'root'})
export class UserService implements Resolve<any> {
  private users: User[] = [{ id: '1', name: 'John', age: '25' }, { id: '2', name: 'Jane', age: '30' }, { id: '3', name: 'Jim', age: '35' }];
  constructor() { }

  getUsers() {
    return this.users;
  }

  addUser(user: { age: string, name: string }) {
    this.users.push({ ...user, id: String(this.users.length + 1) });
  }
  getUserById(id: string) {
    return this.users.find(user => user.id === id);
  }
  resolve(){
    return this.getUserById('1');
  }
}