import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraImcModule } from './calculadoraImc/calculadoraImc.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalculadoraImcModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
