import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { SimpleCounterComponent } from './features/simple-counter/simple-counter.component';

export const routes: Routes = [
  {
    path: '',
    component: SimpleCounterComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
