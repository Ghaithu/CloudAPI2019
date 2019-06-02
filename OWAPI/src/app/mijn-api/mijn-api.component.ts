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

  pageNum:number =1;
  nextPage(){
    this.pageNum++;
    this.Service.GetName(this.pageNum).subscribe(a =>{
      this.Heroinfo = a;
    })
    console.log(this.pageNum)
  }
  prevPage(){
    this.pageNum--;
    this.Service.GetName(this.pageNum).subscribe(a =>{
      this.Heroinfo = a;
    })
  }


  ngOnInit() {

    this.Service.GetName(this.pageNum).subscribe(a =>{
      this.Heroinfo = a;
    })
    
  }
  

  GetHero(id){
    this.Service.PassID(id+1);
  }

}
