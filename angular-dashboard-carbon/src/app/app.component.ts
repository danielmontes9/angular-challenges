import { Component, HostBinding } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SharedModule } from "./shared/shared.module";
import { ThemeService } from "./carbon/core/services/theme.service";
import { CommonModule } from "@angular/common";
import { LocalstorageService } from "./carbon/core/services/localstorage.service";
import { LoaderService } from "./carbon/core/services/loader.service";

@Component({
	selector: "app-root",
	imports: [RouterOutlet, CommonModule, SharedModule],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	currentTheme: "white" | "g10" | "g90" | "g100" = "white";
	isLoading = true;
	title = "angular-dashboard-carbon";

	constructor(
		private _themeService: ThemeService,
		private _loaderService: LoaderService,
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

		window.addEventListener("load", () => {
			this._loaderService.setLoading(false);
		});

		this._loaderService.loading$.subscribe((isLoading) => {
			setTimeout(() => {
				this.isLoading = isLoading;
			}, 3000);
		});
	}
}
