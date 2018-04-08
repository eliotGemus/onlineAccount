import { Component, OnInit } from '@angular/core';
import { User } from '../../models/index';
import { UserService} from '../../services/index';
import { Router } from '@angular/router';

@Component({
  selector: 'documentation-form',
  templateUrl: './documentation-form.component.html',
  styleUrls: ['./documentation-form.component.css']
})
export class DocumentationFormComponent implements OnInit {

  currentUser: User;

  constructor(private router: Router,  private userService: UserService) { }

  ngOnInit() {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  goBack() {
      this.router.navigate(['accountInformationForm']);
  }

  submitApplication() {
      this.router.navigate(['success']);
  }
}
