import { Component } from "@angular/core";
import { IconService } from "carbon-components-angular";

import Notification20 from "@carbon/icons/es/notification/20";
import UserAvatar20 from "@carbon/icons/es/user--avatar/20";
import Switcher20 from "@carbon/icons/es/switcher/20";
import Awake20 from "@carbon/icons/es/awake/20";
import Asleep20 from "@carbon/icons/es/asleep/20";
import Help20 from "@carbon/icons/es/help/20";

@Component({
	selector: "app-navbar",
	standalone: false,
	templateUrl: "./navbar.component.html",
	styleUrl: "./navbar.component.scss",
})
export class NavbarComponent {
	currentTheme: string = "light";

	constructor(protected iconService: IconService) {}

	ngOnInit(): void {
		this.iconService.registerAll([
			Notification20,
			UserAvatar20,
			Switcher20,
			Awake20,
			Asleep20,
			Help20,
		]);
	}

	activeDarkMode(event: boolean): void {
		event == true ? (this.currentTheme = "dark") : (this.currentTheme = "light");
	}
}
