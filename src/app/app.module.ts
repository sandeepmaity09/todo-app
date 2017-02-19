import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";

import { AppComponent }  from './app.component';
import { ViewComponent } from './main-view/main-view.component';
import { CreateComponent } from './create/create.component';
import { ShowComponent } from './show/show.component';
import { routes } from "./app.routes";


@NgModule({
  imports:      [ BrowserModule,FormsModule,RouterModule.forRoot(routes) ],
  declarations: [ AppComponent,ViewComponent,CreateComponent,ShowComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
