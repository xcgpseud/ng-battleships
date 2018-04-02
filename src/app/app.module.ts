import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { ShipService } from './services/ship.service';


@NgModule({
  declarations: [
    AppComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ShipService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
