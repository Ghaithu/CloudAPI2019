import { Component, OnInit } from '@angular/core';
import { HerominInfo,OWServiceService } from '../owservice.service';

@Component({
  selector: 'app-mijn-api',
  templateUrl: './mijn-api.component.html',
  styleUrls: ['./mijn-api.component.css']
})
export class MijnAPIComponent implements OnInit {

  Heroinfo: HerominInfo[];

  constructor(private Service: OWServiceService) { }

  ngOnInit() {

    this.Service.GetName().subscribe(a =>{
      this.Heroinfo = a;
    })
    
  }
  

  GetHero(id){
    this.Service.PassID(id+1);
  }

}
