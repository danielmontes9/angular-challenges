import { Component, Input } from "@angular/core";
import { IconService, ModalService } from "carbon-components-angular";
import { ThemeService } from "../../../carbon/core/services/theme.service";
import { LocalstorageService } from "../../../carbon/core/services/localstorage.service";

import UserAvatar20 from "@carbon/icons/es/user--avatar/20";
import Notification20 from "@carbon/icons/es/notification/20";
import Switcher20 from "@carbon/icons/es/switcher/20";
import Awake20 from "@carbon/icons/es/awake/20";
import Asleep20 from "@carbon/icons/es/asleep/20";
import Help20 from "@carbon/icons/es/help/20";
import { SampleModalComponent } from "../sample-modal/sample-modal.component";

@Component({
	selector: "app-navbar",
	standalone: false,
	templateUrl: "./navbar.component.html",
	styleUrl: "./navbar.component.scss",
})
export class NavbarComponent {
	@Input() modalText = "Hello, World";
	@Input() size = "md";
	@Input() showCloseButton = true;

	currentTheme: "white" | "g10" | "g90" | "g100" = "white";

	constructor(
		private themeService: ThemeService,
		protected iconService: IconService,
		protected modalService: ModalService,
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
			Notification20,
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

	openModalInfo(): void {
		this.modalService.create({
			component: SampleModalComponent,
			inputs: {
				modalText: this.modalText,
				size: this.size,
				showCloseButton: this.showCloseButton,
			},
		});
	}
}
