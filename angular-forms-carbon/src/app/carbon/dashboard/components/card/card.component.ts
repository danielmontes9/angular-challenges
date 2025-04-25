import { Component, Input } from "@angular/core";
import { IconService } from "carbon-components-angular";

import CaretDown20 from "@carbon/icons/es/caret--down/20";
import CaretUp20 from "@carbon/icons/es/caret--up/20";
import OverflowMenuVertical20 from "@carbon/icons/es/overflow-menu--vertical/20";
import WarningAltFilled24 from "@carbon/icons/es/warning--alt--filled/24";
import CheckmarkFilled24 from "@carbon/icons/es/checkmark--filled/24";

@Component({
	selector: "app-card",
	standalone: false,
	templateUrl: "./card.component.html",
	styleUrl: "./card.component.scss",
})
export class CardComponent {
	@Input() title: string = "";
	@Input() subtitle: string = "";
	@Input() iconStatus: "warning" | "success" | "" = "";
	@Input() amount: string = "";
	@Input() shortDescription: string = "";
	@Input() amountAditional: string = "";
	@Input() iconAmount: "up" | "down" | "" = "";

	constructor(protected iconService: IconService) {}

	ngOnInit(): void {
		this.iconService.registerAll([
			CaretDown20,
			CaretUp20,
			WarningAltFilled24,
			CheckmarkFilled24,
			OverflowMenuVertical20,
		]);
	}
}
