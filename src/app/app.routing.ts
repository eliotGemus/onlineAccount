import { Routes, RouterModule } from '@angular/router';
import { DocumentationFormComponent, AccountInformationFormComponent, EmploymentFormComponent, ApplicationFormComponent } from './forms/index';
import { AuthGuard } from './authentificator/index';
import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { SuccessComponent } from './success/index';
import { SubmitFailComponent } from './submitFail/index';
import { RegisterComponent } from './register/index';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'applicationForm', component: ApplicationFormComponent },
    { path: 'employmentForm', component: EmploymentFormComponent },
    { path: 'accountInformationForm', component: AccountInformationFormComponent  },
    { path: 'documentationForm', component: DocumentationFormComponent  },
    { path: 'success', component: SuccessComponent  },
    { path: 'submitFail', component: SubmitFailComponent  },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
