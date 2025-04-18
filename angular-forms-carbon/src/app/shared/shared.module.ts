import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IconModule, UIShellModule } from "carbon-components-angular";

import { NavbarComponent } from "./components/navbar/navbar.component";

@NgModule({
	declarations: [NavbarComponent],
	imports: [CommonModule, UIShellModule, IconModule],
	exports: [NavbarComponent],
})
export class SharedModule {}
