import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ConfirmEqualValidatorDirective } from './register-clients/shared/confirm-error-validate.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterClientsComponent } from './register-clients/register-clients.component';
import { RegisterClientComponent } from './register-clients/register-client/register-client.component';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './home/home.component';
import { RegisterEmployerComponent } from './register-clients/register-employer/register-employer.component';
import { HeaderComponent } from './register-clients/header/header.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';

const appRoutes: Routes = [
/*  { path: 'home', component: UserComponent },*/
  { path: 'clients', component: RegisterClientsComponent },
  { path: 'employer', component: RegisterEmployerComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
 ];

@NgModule({
  declarations: [
    AppComponent,
    RegisterClientsComponent,
    RegisterClientComponent,
    ConfirmEqualValidatorDirective,
    HomeComponent,
    PageNotFoundComponent,
    RegisterEmployerComponent,
    HeaderComponent,
    UserComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
