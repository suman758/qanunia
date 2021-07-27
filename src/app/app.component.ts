import { Component } from '@angular/core';

import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'qanunia';
  someClass = 'ltr';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
}

  addClass(classname = 'ltr') {
    this.someClass = classname;
    const language = (this.someClass == 'ltr' ? 'en':'ar');
    this.translate.use(language);
  }
}
