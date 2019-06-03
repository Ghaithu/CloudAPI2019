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


  Nameasc(){
    this.sort = "name";
    this.dir = "asc";
    this.Service.GetMap(this.pageNum,this.sort,this.dir).subscribe(a =>{
      this.mapinfo = a;
    })
  }

  Namedesc(){
    this.sort = "name";
    this.dir = "desc";
    this.Service.GetMap(this.pageNum,this.sort,this.dir).subscribe(a =>{
      this.mapinfo = a;
    })

  }

  Orderasc(){
    this.sort = "order";
    this.dir = "asc";
    this.Service.GetMap(this.pageNum,this.sort,this.dir).subscribe(a =>{
      this.mapinfo = a;
    })

  }

  Orderdesc(){
    this.sort = "order";
    this.dir = "desc";
    this.Service.GetMap(this.pageNum,this.sort,this.dir).subscribe(a =>{
      this.mapinfo = a;
    })

  }



GetSearchMap(){
  this.Service.PassMapID(this._mapid);
  this.router.navigate(['/Map']);

}
pageNum:number = 0;
sort:string;
dir:string;

  nextPage(){
    this.pageNum++;
    this.Service.GetMap(this.pageNum,this.sort,this.dir).subscribe(a =>{
      this.mapinfo = a;
    })
    console.log(this.pageNum)
  }
  prevPage(){
    this.pageNum--;
    this.Service.GetMap(this.pageNum,this.sort,this.dir).subscribe(a =>{
      this.mapinfo = a;
    })
  }

ngOnInit() {

  this.Service.GetMap(this.pageNum,this.sort,this.dir).subscribe(a =>{
    this.mapinfo = a;
  })
  
}

NewMap(){
  this.Service.PostMap(this.addmap);

}



  

}

