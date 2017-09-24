import { ServiceService } from '../services/service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterializeModule } from 'ng2-materialize/dist';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: 'services', component: ListComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    MaterializeModule,
    BrowserAnimationsModule
  ],
  declarations: [ListComponent],
  providers: [
    ServiceService
  ]
})
export class ServiceModule { }
