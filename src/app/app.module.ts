import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainListComponent } from './main-list/main-list.component';
import {Router, RouterModule, Routes} from '@angular/router';
import { PerformersComponent } from './performers/performers.component';
import { CompositionsComponent } from './compositions/compositions.component';
import {FormsModule} from '@angular/forms';
import { AddEntityComponent } from './add-entity/add-entity.component';
import {HttpClientModule} from '@angular/common/http';
import { AddPerformedCompositionComponent } from './add-performed-composition/add-performed-composition.component';

const appRoutes: Routes = [
  {
    path: 'list',
    component: MainListComponent
  },
  {
    path: 'compositions',
    component: CompositionsComponent
  },
  {
    path: 'performer',
    component: PerformersComponent
  },
  {
    path: 'addEntity',
    component: AddEntityComponent
  },
  {
    path: 'addPerformedComposition',
    component: AddPerformedCompositionComponent
  },
  {
    path: '',
    component: MainListComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MainListComponent,
    PerformersComponent,
    CompositionsComponent,
    AddEntityComponent,
    AddPerformedCompositionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
