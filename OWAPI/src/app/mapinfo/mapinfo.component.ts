import { Component, OnInit } from '@angular/core';
import { OwnAPIService, Mapinfo } from '../own-api.service';

@Component({
  selector: 'app-mapinfo',
  templateUrl: './mapinfo.component.html',
  styleUrls: ['./mapinfo.component.css']
})
export class MapinfoComponent implements OnInit {

  constructor(private Service: OwnAPIService) { }

  _map : Mapinfo[];


  ngOnInit() {
    this.Service.GetMapID(this.Service.MapID()).subscribe(res =>{

      this._map = res;

    })
  }

}
