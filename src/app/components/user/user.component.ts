import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { UserService } from "./user.service";
import { User } from "../../models/user";
import { NgFor, NgIf } from "@angular/common";
import { ColorRedDirective } from "./color-red.directive";
import { ActivatedRoute } from "@angular/router";
import { AuthService } from "../auth/auth.service";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  imports: [FormsModule, NgFor, ColorRedDirective, NgIf],
  providers: [UserService, AuthService],
  standalone: true  
})
export class UserComponent implements OnInit {

user?: User; 
id: string = '';
  constructor(private userService: UserService, private activeRoute: ActivatedRoute) {
    this.userService = userService;
  } 


  ngOnInit() {
   this.activeRoute.data.subscribe((data) => this.user = data['user']);
  }
}