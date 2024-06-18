import { NgFor } from "@angular/common";
import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { UserService } from "../user/user.service";
import { FormsModule } from "@angular/forms";
import { User } from "../../models/user";


@Component({
  selector: 'app-home',
  imports: [RouterLink, RouterLinkActive, NgFor, FormsModule],
  providers: [UserService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true
})
export class HomeComponent implements OnInit {
  
  newUser: User = { id: '', name: '', age: '' }
  usersId: string[] = []
  users: User[] = []
constructor(private userService: UserService) {
  this.usersId = this.userService.getUsers().map(user => user.id);
}


addUser() {
  this.userService.addUser(this.newUser);
}

ngOnInit(): void {
  this.users = this.userService.getUsers();
}
}