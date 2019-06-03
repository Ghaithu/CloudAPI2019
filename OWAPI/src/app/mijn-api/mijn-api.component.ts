import { Component, OnInit } from '@angular/core';
import { HerominInfo,OWServiceService } from '../owservice.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-mijn-api',
  templateUrl: './mijn-api.component.html',
  styleUrls: ['./mijn-api.component.css']
})
export class MijnAPIComponent implements OnInit {

  Heroinfo: HerominInfo[];

  constructor(private Service: OWServiceService, private router:Router) { 

    
  }
  sumID:number;
  nameH:string;
  

  GetSearchHero(){
    this.Service.PassID(this.sumID);  
    this.router.navigate(['/Hero']);
  }

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

    // console.log(this.Service.GetName(this.pageNum))
    
  }
  

  GetHero(id){
    this.Service.PassID(id+1);
  }

}
