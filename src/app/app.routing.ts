import { Routes, RouterModule } from '@angular/router';
import { ApplicationFormComponent } from './forms/application-form/application-form.component';
import { EmploymentFormComponent } from './forms/employment-form/employment-form.component';
import { AuthGuard } from './authentificator/index';
import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { RegisterComponent } from './register/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'applicationForm', component: ApplicationFormComponent },
    { path: 'employmentForm', component: EmploymentFormComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
