import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-todo-ngzorro';

  constructor(private _translate: TranslateService) {
    this._translate.setDefaultLang('en');
    this._translate.use('en');

  }
}
