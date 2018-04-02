import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/index';
import { PersonalInfo } from '../../models/index';
import { UserService} from '../../services/index';

@Component({
  selector: 'application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {

  currentUser: User;

  constructor(private router: Router,  private userService: UserService) { }

  ngOnInit() {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      if (this.currentUser.personalInfo == null) {
        this.currentUser.personalInfo = new PersonalInfo('','','','','','','');
      }
  }

  goNext() {
      this.savePersonalInfo();
      this.router.navigate(['employmentForm']);
  }

  goBack() {
      this.savePersonalInfo();
      this.router.navigate(['']);
  }

  savePersonalInfo() {
    this.userService.update(this.currentUser)
        .subscribe(
            data => {
                localStorage.setItem('currentUser', JSON.stringify(data));
            },
            error => {
              //Handle error
            });
  }

}
