import { Component, OnInit } from "@angular/core";
import { UserService } from "../user/user.service";
import { User } from "../../models/user";
import { NgFor } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
  imports: [NgFor, FormsModule, RouterLink, RouterLinkActive],
  providers: [UserService],
  standalone: true 
})
export class AboutComponent implements OnInit{
  users: User[] = []
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.users = this.userService.getUsers()
  }
}