import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { RequestComponent } from './request/request.component';
import { ReceivedComponent } from './received/received.component';
import { SentComponent } from './sent/sent.component';
import { StockComponent } from './stock/stock.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: '', redirectTo:'/home', pathMatch:'full' },
  { path: 'home', redirectTo:'/home/request', pathMatch:'full' },
  { path: 'home', component: HomeComponent,
      children:[  
        { path: 'request', component: RequestComponent },
        { path: 'received', component: ReceivedComponent },
        { path: 'sent', component: SentComponent},
        { path: 'stock', component: StockComponent}
      ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
