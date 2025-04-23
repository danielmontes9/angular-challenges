import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CarbonRoutingModule } from "./carbon-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CardComponent } from "./dashboard/components/card/card.component";
import { DialogModule, IconModule, TilesModule } from "carbon-components-angular";

@NgModule({
	declarations: [DashboardComponent, CardComponent],
	imports: [CommonModule, CarbonRoutingModule, IconModule, TilesModule, DialogModule],
})
export class CarbonModule {}
