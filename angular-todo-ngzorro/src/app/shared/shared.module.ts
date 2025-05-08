import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NZ_I18N, es_ES } from 'ng-zorro-antd/i18n';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NotFoundComponent } from './components/not-found/not-found.component';


const components: any[] = [];
const modules: any[] = [
  CommonModule,
  BrowserAnimationsModule,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,

  NzTypographyModule, 
  NzGridModule,
  NzSpaceModule, 
  NzIconModule,
  NzButtonModule,
  NzCardModule,
  NzFormModule,
  NzInputModule,
  NzMessageModule,
  NzResultModule,
  NzListModule,
  NzPopconfirmModule,
  NzDividerModule,
  NzModalModule
];
const providers: any = [ 
  { provide: NZ_I18N, useValue: es_ES },
];


@NgModule({
  declarations: [...components, NotFoundComponent],
  imports: [
    ...modules
  ],
  exports: [
    ...components,
    ...modules
  ],
  providers: [
    ...providers,
  ]
})
export class SharedModule { }
