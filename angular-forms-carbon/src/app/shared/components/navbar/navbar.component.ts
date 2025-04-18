import { Component } from "@angular/core";
import { IconService } from "carbon-components-angular";

import Notification20 from "@carbon/icons/es/notification/20";
import UserAvatar20 from "@carbon/icons/es/user--avatar/20";
import Switcher20 from "@carbon/icons/es/switcher/20";

@Component({
	selector: "app-navbar",
	standalone: false,
	templateUrl: "./navbar.component.html",
	styleUrl: "./navbar.component.scss",
})
export class NavbarComponent {
	constructor(protected iconService: IconService) {}

	ngOnInit() {
		this.iconService.registerAll([Notification20, UserAvatar20, Switcher20]);
	}
}
