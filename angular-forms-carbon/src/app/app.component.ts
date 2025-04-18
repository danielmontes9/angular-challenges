import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { IconModule, IconService, UIShellModule } from "carbon-components-angular";

import Notification20 from "@carbon/icons/es/notification/20";
import UserAvatar20 from "@carbon/icons/es/user--avatar/20";
import Switcher20 from "@carbon/icons/es/switcher/20";

@Component({
	selector: "app-root",
	imports: [RouterOutlet, UIShellModule, IconModule],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	title = "angular-forms-carbon";

	constructor(protected iconService: IconService) {}

	ngOnInit() {
		this.iconService.registerAll([Notification20, UserAvatar20, Switcher20]);
	}
}
