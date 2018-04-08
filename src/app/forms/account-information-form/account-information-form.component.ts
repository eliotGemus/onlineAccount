import { Component, OnInit } from '@angular/core';
import { UserService} from '../../services/index';
import { User, AccountInfo } from '../../models/index';
import { Router } from '@angular/router';

@Component({
  selector: 'account-information-form',
  templateUrl: './account-information-form.component.html',
  styleUrls: ['./account-information-form.component.css']
})

export class AccountInformationFormComponent implements OnInit {

  currentUser: User;
  loading = false;
  accountTypes = ['Savings', 'Deposit'];
  hearAboutUsList = ['Facebook', 'From a friend', 'Radio', 'Others'];

  constructor(private router: Router,  private userService: UserService) { }

  ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (this.currentUser.accountInfo == null) {
            this.currentUser.accountInfo = new AccountInfo('','','','');
        }
  }

  goNext() {
    this.loading = true;
    this.userService.update(this.currentUser)
        .subscribe(
            data => {
                localStorage.setItem('currentUser', JSON.stringify(data));
                this.loading = false;
                this.router.navigate(['']);
            },
            error => {
              //Handle error
            });
  }



  goBack() {

        this.router.navigate(['employmentForm']);

  }



}
