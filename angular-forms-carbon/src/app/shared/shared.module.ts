import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IconModule, UIShellModule, ThemeModule } from "carbon-components-angular";

import { NavbarComponent } from "./components/navbar/navbar.component";

@NgModule({
	declarations: [NavbarComponent],
	imports: [CommonModule, ThemeModule, UIShellModule, IconModule],
	exports: [ThemeModule, NavbarComponent],
})
export class SharedModule {}
