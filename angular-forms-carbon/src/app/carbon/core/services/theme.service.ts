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
	}
}
