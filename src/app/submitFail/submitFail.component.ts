import { Component, OnInit } from '@angular/core';
import { User } from '../models/index';
import { UserService } from '../services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'submitFail.component.html'
})

export class SubmitFailComponent implements OnInit {
    currentUser: User;

    constructor(private userService: UserService) {
   		this.currentUser = JSON.parse(localStorage.getItem('currentUser'));    }

    ngOnInit() {

    }

}
