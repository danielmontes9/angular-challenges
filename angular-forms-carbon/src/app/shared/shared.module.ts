import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
	IconModule,
	UIShellModule,
	ThemeModule,
	MenuButtonModule,
	DropdownModule,
} from "carbon-components-angular";

import { NavbarComponent } from "./components/navbar/navbar.component";

@NgModule({
	declarations: [NavbarComponent],
	imports: [
		CommonModule,
		ThemeModule,
		UIShellModule,
		IconModule,
		MenuButtonModule,
		DropdownModule,
	],
	exports: [ThemeModule, NavbarComponent],
})
export class SharedModule {}
