import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainListComponent} from './main-list/main-list.component';
import {PerformersComponent} from './performers/performers.component';
import {CompositionsComponent} from './compositions/compositions.component';

const routes: Routes = [
  {
    path: 'list',
    component: MainListComponent
  },
  {
    path: 'performers',
    component: PerformersComponent
  },
  {
    path: 'compositions',
    component: CompositionsComponent
  },
  {
    path: '',
    component: MainListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
