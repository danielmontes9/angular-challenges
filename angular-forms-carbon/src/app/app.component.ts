import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { IconModule, UIShellModule } from "carbon-components-angular";

@Component({
	selector: "app-root",
	imports: [RouterOutlet, UIShellModule, IconModule],
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	title = "angular-forms-carbon";
}
