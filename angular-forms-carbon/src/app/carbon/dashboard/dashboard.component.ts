import { Component, Input } from "@angular/core";
import { IconService } from "carbon-components-angular";

import Settings16 from "@carbon/icons/es/settings/16";
import DocumentDownload16 from "@carbon/icons/es/document--download/16";

@Component({
	selector: "app-dashboard",
	standalone: false,
	templateUrl: "./dashboard.component.html",
	styleUrl: "./dashboard.component.scss",
})
export class DashboardComponent {
	cards: any[] = [
		{
			title: "Supply below safety stock",
			subtitle: "",
			iconStatus: "warning",
			amount: "24",
			shortDescription: "items",
			amountAditional: "22%",
			iconAmount: "down",
		},
		{
			title: "Overall supply inventory",
			subtitle: "",
			iconStatus: "success",
			amount: "5123",
			shortDescription: "",
			amountAditional: "7%",
			iconAmount: "up",
		},
		{
			title: "Open supply order value",
			subtitle: "",
			iconStatus: "",
			amount: "318923",
			shortDescription: "",
			amountAditional: "CAD",
			iconAmount: "",
		},
		{
			title: "Average purchase order",
			subtitle: "Per day",
			iconStatus: "",
			amount: "1934",
			shortDescription: "",
			amountAditional: "",
			iconAmount: "",
		},
	];

	constructor(protected iconService: IconService) {}

	ngOnInit(): void {
		this.iconService.registerAll([Settings16, DocumentDownload16]);
	}
}
