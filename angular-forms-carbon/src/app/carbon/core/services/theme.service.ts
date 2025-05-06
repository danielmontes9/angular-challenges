import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { LocalstorageService } from "./localstorage.service";

@Injectable({
	providedIn: "root",
})
export class ThemeService {
	private currentTheme: BehaviorSubject<"white" | "g10" | "g90" | "g100"> =
		new BehaviorSubject<"white" | "g10" | "g90" | "g100">("white");
	$currentTheme = this.currentTheme.asObservable();

	constructor(private _localStorageService: LocalstorageService) {}

	toggleTheme(theme: "white" | "g10" | "g90" | "g100"): void {
		this.currentTheme.next(theme);
		this._localStorageService.saveTheme("theme", theme);
		this.updateDocumentBackground(theme);
	}

	private updateDocumentBackground(theme: "white" | "g10" | "g90" | "g100"): void {
		const themeColors: { [key: string]: string } = {
			white: "#ffffff",
			g10: "#f4f4f4",
			g90: "#262626",
			g100: "#161616",
		};
		document.body.style.backgroundColor = themeColors[theme];
	}
}
