import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employment-form',
  templateUrl: './employment-form.component.html',
  styleUrls: ['./employment-form.component.css']
})
export class EmploymentFormComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
      this.router.navigate(['applicationForm']);
  }

}
