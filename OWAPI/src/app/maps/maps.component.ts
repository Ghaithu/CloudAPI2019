import { Component, OnInit } from '@angular/core';
import {Mapinfo, OwnAPIService } from '../own-api.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  constructor(private Service: OwnAPIService,private router: Router) { }

  private addmap : any = {"mapname": "", "description" : "", "location" : "", "order":""};
  mapinfo: Mapinfo[];

  _mapid:number;



GetSearchMap(){
  this.Service.PassMapID(this._mapid);
  this.router.navigate(['/Map']);
  console.log(this._mapid);

}

ngOnInit() {

  this.Service.GetMap().subscribe(a =>{
    this.mapinfo = a;
  })
  
}

NewMap(){
  this.Service.PostMap(this.addmap);

}



  

}

