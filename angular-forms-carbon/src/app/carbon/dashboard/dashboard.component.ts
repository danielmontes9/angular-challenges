import { Component, Input } from "@angular/core";
import {
	IconService,
	TableHeaderItem,
	TableItem,
	TableModel,
	TableRowSize,
} from "carbon-components-angular";

import Settings16 from "@carbon/icons/es/settings/16";
import DocumentDownload16 from "@carbon/icons/es/document--download/16";
import Add16 from "@carbon/icons/es/add/16";
import Filter16 from "@carbon/icons/es/filter/16";

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

	@Input() size: TableRowSize = "md";
	@Input() showSelectionColumn = true;
	@Input() enableSingleSelect = false;
	@Input() striped = true;
	@Input() isDataGrid = false;
	@Input() noData = false;
	@Input() stickyHeader = false;
	@Input() skeleton = false;

	model = new TableModel();
	displayedCountries = ["US", "France", "Argentina", "Japan"];
	searchValue = "";

	dataset = [
		[
			new TableItem({ data: "800" }),
			new TableItem({ data: "East Sadye" }),
			new TableItem({ data: "Store" }),
			new TableItem({ data: "US" }),
		],
		[
			new TableItem({ data: "500" }),
			new TableItem({ data: "Lueilwitzview" }),
			new TableItem({ data: "Store" }),
			new TableItem({ data: "US" }),
		],
		[
			new TableItem({ data: "120" }),
			new TableItem({ data: "East Arcelyside" }),
			new TableItem({ data: "Store" }),
			new TableItem({ data: "France" }),
		],
		[
			new TableItem({ data: "119" }),
			new TableItem({ data: "West Dylan" }),
			new TableItem({ data: "Store" }),
			new TableItem({ data: "Argentina" }),
		],
		[
			new TableItem({ data: "54" }),
			new TableItem({ data: "Brandynberg" }),
			new TableItem({ data: "Store" }),
			new TableItem({ data: "Japan" }),
		],
		[
			new TableItem({ data: "15" }),
			new TableItem({ data: "Stoltenbergport" }),
			new TableItem({ data: "Store" }),
			new TableItem({ data: "Canada" }),
		],
		[
			new TableItem({ data: "12" }),
			new TableItem({ data: "Rheabury" }),
			new TableItem({ data: "Store" }),
			new TableItem({ data: "US" }),
		],
	];

	constructor(protected iconService: IconService) {}

	ngOnInit(): void {
		this.iconService.registerAll([Settings16, DocumentDownload16, Add16, Filter16]);

		this.model.header = [
			new TableHeaderItem({
				data: "Node ID",
			}),
			new TableHeaderItem({
				data: "Node name",
			}),
			new TableHeaderItem({
				data: "Node type",
			}),
			new TableHeaderItem({
				data: "Country",
			}),
		];

		this.model.data = this.dataset;

		this.model.isRowFiltered = (index: number) => {
			const nodeName = this.model.row(index)[1].data;
			const countryName = this.model.row(index)[3].data;
			return (
				!nodeName.toLowerCase().includes(this.searchValue.toLowerCase()) ||
				!this.displayedCountries.includes(countryName)
			);
		};
	}

	filterNodeNames(searchString: string) {
		this.searchValue = searchString;
	}

	filterCountries(countryName: string, checked: boolean) {
		if (checked) {
			this.displayedCountries.push(countryName);
		} else {
			this.displayedCountries.splice(this.displayedCountries.indexOf(countryName), 1);
		}
	}

	overflowOnClick = (event: any) => {
		event.stopPropagation();
	};
}
