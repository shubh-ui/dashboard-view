import { NgModule } from '@angular/core';
import { DashboardViewComponent } from './dashboard-view.component';
import { DashboardContainerComponent } from '../lib/dashboard-container/dashboard-container.component';


@NgModule({
  declarations: [
    DashboardViewComponent,
    DashboardContainerComponent
  ],
  imports: [
  ],
  exports: [
    DashboardViewComponent,
    DashboardContainerComponent
  ]
})
export class DashboardViewModule { }
