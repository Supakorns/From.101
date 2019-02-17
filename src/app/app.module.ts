import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [    //เป็นการประกาศว่าเราจะทำการ new object ขึ้นมา , สร้าง component ขึ้นมาประกาศที่นี่
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule   //
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
