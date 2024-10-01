import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardViewModule } from 'projects/dashboard-view/src/lib/dashboard-view.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
