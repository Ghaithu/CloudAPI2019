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
import {NgxPaginationModule} from 'ngx-pagination';
import {CardModule} from 'primeng/card';
import {FormsModule} from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {RouterModule} from '@angular/router';
import { MijnAPIComponent } from './mijn-api/mijn-api.component';
import { HeroinfoComponent } from './heroinfo/heroinfo.component';
import { MapsComponent } from './maps/maps.component';
import { MapinfoComponent } from './mapinfo/mapinfo.component';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MijnAPIComponent,
    HeroinfoComponent,
    MapsComponent,
    MapinfoComponent,
    HomeComponent
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
    NgbModule,
    NgxPaginationModule,
    RouterModule.forRoot([
      {path: "Heroes", component: MijnAPIComponent,},
      {path: "Hero", component: HeroinfoComponent},
      {path: "Maps", component: MapsComponent},
      {path: "Map", component: MapinfoComponent},
      {path: "Home", component:HomeComponent},
      {path: '', redirectTo: "Home", pathMatch: 'full'}
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
