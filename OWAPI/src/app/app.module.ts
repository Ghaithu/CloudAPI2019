import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ToolbarModule} from 'primeng/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'; 

import {PanelModule} from 'primeng/panel';
import {HttpClientModule} from '@angular/common/http';

import {CardModule} from 'primeng/card';
import {FormsModule} from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {RouterModule} from '@angular/router';
import { MijnAPIComponent } from './mijn-api/mijn-api.component';
import { HeroinfoComponent } from './heroinfo/heroinfo.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MijnAPIComponent,
    HeroinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToolbarModule,
    BrowserAnimationsModule,
    PanelModule,
    HttpClientModule,
    CardModule,
    FormsModule,
    ButtonModule, 
    RouterModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
