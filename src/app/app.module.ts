import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes, Router, RouterLinkActive } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MingleComponent } from './mingle/mingle.component';
import { WeeklyStatusComponent } from './weekly-status/weekly-status.component';
import { CreateReportComponent } from './create-report/create-report.component';
import { StatusComponent } from './status/status.component';
import { MinglePagesComponent } from './mingle-pages/mingle-pages.component';
import { LoginComponent } from './login/login.component';

const appRoutes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: MingleComponent },
  { path: 'pages', component: MinglePagesComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'weeklyStatus', component: WeeklyStatusComponent, children: [
      { path: '', redirectTo: 'status', pathMatch: 'full' },
      { path: 'status', component: StatusComponent },
      { path: 'create', component: CreateReportComponent }     
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MingleComponent,
    WeeklyStatusComponent,
    CreateReportComponent,
    StatusComponent,
    MinglePagesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
