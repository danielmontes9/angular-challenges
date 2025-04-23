import { Component } from "@angular/core";
import { IconService } from "carbon-components-angular";
import { ThemeService } from "../../../carbon/core/services/theme.service";

import UserAvatar20 from "@carbon/icons/es/user--avatar/20";
import Switcher20 from "@carbon/icons/es/switcher/20";
import Awake20 from "@carbon/icons/es/awake/20";
import Asleep20 from "@carbon/icons/es/asleep/20";
import Help20 from "@carbon/icons/es/help/20";
import { LocalstorageService } from "../../../carbon/core/services/localstorage.service";

@Component({
	selector: "app-navbar",
	standalone: false,
	templateUrl: "./navbar.component.html",
	styleUrl: "./navbar.component.scss",
})
export class NavbarComponent {
	currentTheme: "white" | "g10" | "g90" | "g100" = "white";

	constructor(
		private themeService: ThemeService,
		protected iconService: IconService,
		private _localStorageService: LocalstorageService,
	) {
		this.currentTheme = this._localStorageService.getTheme("theme") as
			| "white"
			| "g10"
			| "g90"
			| "g100";
	}

	ngOnInit(): void {
		this.iconService.registerAll([
			UserAvatar20,
			Switcher20,
			Awake20,
			Asleep20,
			Help20,
		]);
	}

	toggleTheme(event: boolean): void {
		event == true ? (this.currentTheme = "g100") : (this.currentTheme = "white");
		this.themeService.toggleTheme(this.currentTheme);
	}
}
