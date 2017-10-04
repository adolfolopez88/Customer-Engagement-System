import { HttpModule } from '@angular/http';
import { PlaceService } from '../services/place.service';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterializeModule } from 'ng2-materialize/dist';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninComponent } from './signin/signin.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';

const routes: Routes =  [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signin', component: SigninComponent},
  { path: 'profile/:id', component: ProfileComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    MaterializeModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    LoginComponent,
    SigninComponent,
    ProfileComponent,
    ProfileFormComponent,
  ],
  providers: [
    PlaceService,
  ]
})
export class UserModule { }
