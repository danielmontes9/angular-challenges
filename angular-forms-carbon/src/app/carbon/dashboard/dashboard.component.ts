import { Component } from "@angular/core";

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

	constructor() {}
}
