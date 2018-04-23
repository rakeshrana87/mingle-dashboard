import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes, Router, RouterLinkActive } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MingleComponent } from './mingle/mingle.component';
import { WeeklyStatusComponent } from './weekly-status/weekly-status.component';
import { CreateReportComponent } from './create-report/create-report.component';
import { StatusComponent } from './status/status.component';
import { MinglePagesComponent } from './mingle-pages/mingle-pages.component';

const appRoutes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MingleComponent },
  { path: 'pages', component: MinglePagesComponent },
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
    MinglePagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
