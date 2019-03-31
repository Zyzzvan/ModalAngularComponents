import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Componente0Component } from './componente0/componente0.component';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';
import { ComponenteDetalleComponent } from './componente-detalle/componente-detalle.component';
import {Routes, RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalCompComponent } from './modal-comp/modal-comp.component';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { path: '', component: Componente0Component},
  { path: 'componente1', component:  Componente1Component},
  { path: 'componente2/', component:  Componente2Component},
  { path: 'componente1/:id', component:  Componente1Component},
  { path: 'componente2/:id/:titulo', component:  Componente2Component},
  { path: '**', component:  Componente0Component}
];

@NgModule({
  declarations: [
    AppComponent,
    Componente0Component,
    Componente1Component,
    Componente2Component,
    ComponenteDetalleComponent,
    ModalCompComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ModalModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ModalCompComponent]
})
export class AppModule { }
