import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DataService } from './data.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [ AppComponent, HomeComponent ],
  providers: [ DataService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
