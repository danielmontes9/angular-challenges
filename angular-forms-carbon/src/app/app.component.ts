import { Component, HostBinding } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SharedModule } from "./shared/shared.module";
import { ThemeService } from "./carbon/core/services/theme.service";
import { CommonModule } from "@angular/common";
import { LocalstorageService } from "./carbon/core/services/localstorage.service";

@Component({
	selector: "app-root",
	imports: [RouterOutlet, CommonModule, SharedModule],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	currentTheme: "white" | "g10" | "g90" | "g100" = "white";

	title = "angular-forms-carbon";

	constructor(
		private _themeService: ThemeService,
		private _localStorageService: LocalstorageService,
	) {
		this.currentTheme = this._localStorageService.getTheme("theme") as
			| "white"
			| "g10"
			| "g90"
			| "g100";
		this._themeService.toggleTheme(this.currentTheme);
	}

	ngOnInit() {
		this._themeService.$currentTheme.subscribe((theme) => {
			this.currentTheme = theme;
		});
	}
}
