import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { JsPlumbComponent } from './jsplumtest/jsplumtest.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DiagramComponent } from './diagram/diagram.component';

import { MatSliderModule } from '@angular/material/slider';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from './app-routing.module';
import { TableRecursiveComponent } from './table-recursive/table-recursive.component';

@NgModule({
  declarations: [
    JsPlumbComponent,
    DiagramComponent,
    NavigationComponent,
    TableRecursiveComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [NavigationComponent]
})
export class AppModule { }
