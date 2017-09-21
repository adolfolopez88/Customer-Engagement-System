import { RouterModule, Routes } from '@angular/router';
import { ClientsService } from '../services/clients.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';

import { MaterializeModule } from 'ng2-materialize/dist';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'clients', component: ListComponent},
  { path: 'clients/profile', component: ProfileComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    MaterializeModule,
    BrowserAnimationsModule
  ],
  declarations: [ListComponent, ProfileComponent],
  providers: [ClientsService],
})
export class ClientsModule {



}
