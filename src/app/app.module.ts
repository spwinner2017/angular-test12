import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RedTextDirective } from './red-text.directive';
import { RatingComponent } from './rating/rating.component';
import { AppRoutingModule } from './app-routing.module';
import { LocalstorageService } from './service/localstorage.service';
@NgModule({
  imports:      [ BrowserModule, FormsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [LocalstorageService]
})
export class AppModule { }
