import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from "@angular/router";

import { AuthService } from './services/auth.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RequestComponent } from './request/request.component';
import { ReceivedComponent } from './received/received.component';

const appRoutes: Routes = [
]

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    SidebarComponent,
    RequestComponent,
    ReceivedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
