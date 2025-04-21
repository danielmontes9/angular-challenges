import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CarbonRoutingModule } from "./carbon-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";

@NgModule({
	declarations: [DashboardComponent],
	imports: [CommonModule, CarbonRoutingModule],
})
export class CarbonModule {}
