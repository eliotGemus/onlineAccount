import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService} from '../../services/index';
import { User, EmploymentInfo } from '../../models/index';

@Component({
  selector: 'app-employment-form',
  templateUrl: './employment-form.component.html',
  styleUrls: ['./employment-form.component.css']
})
export class EmploymentFormComponent implements OnInit {

  currentUser: User;
  loading = false;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (this.currentUser.employmentInfo == null) {
      this.currentUser.employmentInfo = new EmploymentInfo('','','','');
    }
  }

  goBack() {
          this.router.navigate(['applicationForm']);
  }


  goNext() {
    this.loading = true;
    this.userService.update(this.currentUser)
        .subscribe(
            data => {
                localStorage.setItem('currentUser', JSON.stringify(data));
                this.loading = false;
                this.router.navigate(['accountInformationForm']);
            },
            error => {
              //Handle error
            });
  }

  }
