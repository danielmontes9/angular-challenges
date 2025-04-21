import { Routes } from "@angular/router";

export const routes: Routes = [
	{
		path: "",
		loadChildren: () => import("./carbon/carbon.module").then((m) => m.CarbonModule),
	},
];
