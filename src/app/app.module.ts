import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { routing }        from './app.routing';
import { AlertComponent } from './directives/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AlertService, AuthenticationService, UserService } from './services/index';
import { AuthGuard } from './authentificator/index';
import { fakeBackendProvider, JwtInterceptor } from './helpers/index';
import { DocumentationFormComponent, AccountInformationFormComponent, EmploymentFormComponent, ApplicationFormComponent } from './forms/index';


@NgModule({
  declarations: [
    AppComponent,
    ApplicationFormComponent,
    EmploymentFormComponent,
    AlertComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DocumentationFormComponent,
    AccountInformationFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },

        // provider used to create fake backend
        fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
