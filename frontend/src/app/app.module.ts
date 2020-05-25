import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/templates/header/header.component';

import { MatToolbarModule } from "@angular/material/toolbar";
import { FooterComponent } from './components/templates/footer/footer.component';
import { NavComponent } from './components/templates/nav/nav.component';

import {MatSidenavModule} from "@angular/material/sidenav";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule, MatList} from "@angular/material/list";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';
import { ProductCreateComponent } from './components/product/product-create/product-create.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    RedDirective,
    ForDirective,
    ProductCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
