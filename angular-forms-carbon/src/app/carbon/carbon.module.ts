import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CarbonRoutingModule } from "./carbon-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CardComponent } from "./dashboard/components/card/card.component";
import {
	BreadcrumbModule,
	ButtonModule,
	CheckboxModule,
	DialogModule,
	IconModule,
	SelectModule,
	Tab,
	TableModule,
	TabsModule,
	TilesModule,
	TooltipModule,
} from "carbon-components-angular";

@NgModule({
	declarations: [DashboardComponent, CardComponent],
	imports: [
		CommonModule,
		CarbonRoutingModule,
		ButtonModule,
		IconModule,
		TilesModule,
		TooltipModule,
		DialogModule,
		BreadcrumbModule,
		SelectModule,
		TabsModule,
		TableModule,
		CheckboxModule,
	],
})
export class CarbonModule {}
