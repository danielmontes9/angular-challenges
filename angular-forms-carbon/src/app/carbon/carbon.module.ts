import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CarbonRoutingModule } from "./carbon-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CardComponent } from "./dashboard/components/card/card.component";
import { TableOrdersComponent } from "./dashboard/components/table-orders/table-orders.component";
import {
	BreadcrumbModule,
	ButtonModule,
	CheckboxModule,
	DialogModule,
	IconModule,
	SelectModule,
	TableModule,
	TabsModule,
	TilesModule,
	TooltipModule,
} from "carbon-components-angular";
import { CountUpModule } from "ngx-countup";

@NgModule({
	declarations: [DashboardComponent, CardComponent, TableOrdersComponent],
	imports: [
		CommonModule,
		CarbonRoutingModule,
		CountUpModule,
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
