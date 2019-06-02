import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HerominInfo,OWServiceService } from '../owservice.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private Service: OWServiceService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  sumID:number;

  GetSearchHero(){
    this.Service.PassID(this.sumID);
    this.router.navigate(['/Hero']);
    

  }

}
