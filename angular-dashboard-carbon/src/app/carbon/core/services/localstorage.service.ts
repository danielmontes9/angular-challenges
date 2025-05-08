import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class LocalstorageService {
	constructor() {}

	saveTheme(key: string, value: string): void {
		localStorage.setItem(key, value);
	}

	getTheme(key: string): string | null {
		return localStorage.getItem(key);
	}
}
