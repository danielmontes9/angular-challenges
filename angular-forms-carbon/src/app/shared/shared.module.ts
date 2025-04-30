import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
	IconModule,
	UIShellModule,
	ThemeModule,
	MenuButtonModule,
	DropdownModule,
	ModalModule,
	PlaceholderModule,
} from "carbon-components-angular";

import { NavbarComponent } from "./components/navbar/navbar.component";
import { SampleModalComponent } from "./components/sample-modal/sample-modal.component";

@NgModule({
	declarations: [NavbarComponent, SampleModalComponent],
	imports: [
		CommonModule,
		ThemeModule,
		UIShellModule,
		IconModule,
		MenuButtonModule,
		DropdownModule,
		ModalModule,
		PlaceholderModule,
	],
	exports: [ThemeModule, NavbarComponent, SampleModalComponent],
})
export class SharedModule {}
