import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonListarComponent } from './pokemon/pokemon-listar/pokemon-listar.component';
import { PokemonModule } from './pokemon/pokemon.module';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PokemonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
