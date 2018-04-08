import { Component, OnInit } from '@angular/core';
import { User } from '../models/index';
import { UserService } from '../services/index';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    currentUser: User;

    constructor(private router: Router, private userService: UserService) {
   		this.currentUser = JSON.parse(localStorage.getItem('currentUser'));    }

    ngOnInit() {
      if(this.currentUser.accountNumber != null) {
          this.router.navigate(['success']);
      }

    }

}
