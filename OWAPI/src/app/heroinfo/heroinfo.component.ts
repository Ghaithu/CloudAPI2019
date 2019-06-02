import { Component, OnInit } from '@angular/core';
import { OWServiceService, HerominInfo } from '../owservice.service';

@Component({
  selector: 'app-heroinfo',
  templateUrl: './heroinfo.component.html',
  styleUrls: ['./heroinfo.component.css']
})
export class HeroinfoComponent implements OnInit {

  constructor(private Service: OWServiceService) { }

  Hero:HerominInfo;

  ngOnInit() {

    this.Service.GetHero(this.Service.GetID()).subscribe(res =>{

      this.Hero = res;

    })
  }

  



}
