import { Routes } from '@angular/router';
import {ContentComponent} from './pages/content/content.component';
import {TestComponent} from './pages/test/test.component';
import {AuthGuard} from './auth.guard';

export const routes: Routes = [
  {path : 'content', component: ContentComponent},
  {
    path : 'test',
    component: TestComponent,
    canActivate: [AuthGuard]
  },
  {path: '', redirectTo : '/content', pathMatch: "full"}
];
