import { ServiceModule } from './service/service.module';
import { UserModule } from './user/user.module';
import { ClientModule } from './client/client.module';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
import { MaterializeModule } from 'ng2-materialize/dist';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: 'AIzaSyCZc-Z40zCZiFwegMUqVi49fwHcX_DQOF8',
  authDomain: 'customer-engagement-system.firebaseapp.com',
  databaseURL: 'https://customer-engagement-system.firebaseio.com',
  projectId: 'customer-engagement-system',
  storageBucket: '',
  messagingSenderId: '336813472601'
};

const routes: Routes =  [
  { path: 'clients', loadChildren: './client/client.module#ClientModule' },
  { path: 'services', loadChildren: './service/service.module#ServiceModule' },
  { path: '', loadChildren: './user/user.module#UserModule' },
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterializeModule.forRoot(),
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(routes),
    ClientModule,
    UserModule,
    ServiceModule
  ],
  entryComponents: [],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
