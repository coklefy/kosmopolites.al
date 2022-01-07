import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';

//import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule], //AppBootstrapModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
