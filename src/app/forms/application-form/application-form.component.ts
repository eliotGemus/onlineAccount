import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PersonalInfo } from '../../models/personalInfo.model';

@Component({
  selector: 'application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {

  personalInfo = new PersonalInfo('','','','','','','');

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goNext() {
      this.router.navigate(['employmentForm']);
  }
  goBack() {
      this.router.navigate(['']);
  }

  get currentJesus() { return JSON.stringify(this.personalInfo); }

}
