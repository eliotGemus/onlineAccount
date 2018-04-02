﻿import { Component, OnInit } from '@angular/core';
import { User } from '../models/index';
import { UserService } from '../services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;

    constructor(private userService: UserService) {
   		this.currentUser = JSON.parse(localStorage.getItem('currentUser'));    }

    ngOnInit() {
      
    }

}
