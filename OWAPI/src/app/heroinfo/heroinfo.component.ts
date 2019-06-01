import { Component, OnInit } from '@angular/core';
import { OWServiceService } from '../owservice.service';

@Component({
  selector: 'app-heroinfo',
  templateUrl: './heroinfo.component.html',
  styleUrls: ['./heroinfo.component.css']
})
export class HeroinfoComponent implements OnInit {

  constructor(private Service: OWServiceService) { }

  ngOnInit() {
  }

  

}
