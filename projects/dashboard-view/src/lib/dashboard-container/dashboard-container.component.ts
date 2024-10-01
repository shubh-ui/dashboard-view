import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.css']
})
export class DashboardContainerComponent {
  @Input()
  dashboardUrlName: string | undefined;
  @Input() currentDashboardId: string | undefined;
  sanitizedDashboardUrl: SafeResourceUrl | undefined;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.setURLName();
  }

  setURLName() {
    console.log("URl set fun caller")
    const guidUrl = `${this.dashboardUrlName}/${this.currentDashboardId}`;
    this.sanitizedDashboardUrl = this.sanitizer.bypassSecurityTrustResourceUrl(guidUrl);
    console.log(this.sanitizedDashboardUrl);
  }
}
