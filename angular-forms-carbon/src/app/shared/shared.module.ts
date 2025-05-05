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
	LoadingModule,
} from "carbon-components-angular";

import { NavbarComponent } from "./components/navbar/navbar.component";
import { SampleModalComponent } from "./components/sample-modal/sample-modal.component";
import { LoaderComponent } from "./components/loader/loader.component";

@NgModule({
	declarations: [NavbarComponent, SampleModalComponent, LoaderComponent],
	imports: [
		CommonModule,
		ThemeModule,
		UIShellModule,
		IconModule,
		MenuButtonModule,
		DropdownModule,
		ModalModule,
		PlaceholderModule,
		LoadingModule,
	],
	exports: [ThemeModule, NavbarComponent, SampleModalComponent, LoaderComponent],
})
export class SharedModule {}
