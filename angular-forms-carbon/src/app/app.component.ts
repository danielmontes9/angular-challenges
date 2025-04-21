import { Component, HostBinding } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { SharedModule } from "./shared/shared.module";
import { ThemeService } from "./carbon/core/services/theme.service";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-root",
	imports: [RouterOutlet, CommonModule, SharedModule],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	currentTheme: "white" | "g10" | "g90" | "g100" = "white";

	title = "angular-forms-carbon";

	constructor(private themeService: ThemeService) {
		this.themeService = themeService;
	}

	ngOnInit() {
		this.themeService.$currentTheme.subscribe((theme) => {
			this.currentTheme = theme;
			console.log("currentTheme", this.currentTheme);
		});
	}
}
