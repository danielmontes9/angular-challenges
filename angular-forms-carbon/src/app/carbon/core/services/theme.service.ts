import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class ThemeService {
	private currentTheme: BehaviorSubject<"white" | "g10" | "g90" | "g100"> =
		new BehaviorSubject<"white" | "g10" | "g90" | "g100">("white");
	$currentTheme = this.currentTheme.asObservable();

	constructor() {}

	toggleTheme(theme: "white" | "g10" | "g90" | "g100"): void {
		this.currentTheme.next(theme);
	}
}
