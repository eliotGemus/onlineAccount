import { Component, OnInit } from '@angular/core';
import { User } from '../models/index';
import { UserService } from '../services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'success.component.html',
    styleUrls: ['./success.component.css']
})

export class SuccessComponent implements OnInit {
    currentUser: User;

    constructor(private userService: UserService) { }

    ngOnInit() {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if(this.currentUser.accountNumber == null) {
        this.updateUser();
      }
    }

    updateUser() {

      this.currentUser.accountNumber = this.generateAccountNumber();
      this.userService.update(this.currentUser)
          .subscribe(
              data => {
                  localStorage.setItem('currentUser', JSON.stringify(data));
              },
              error => {
                //Handle error
              });
    }

    generateAccountNumber() {
        return Math.floor(Math.random() * 9999999999) + 1000000000  ;
    }


}
