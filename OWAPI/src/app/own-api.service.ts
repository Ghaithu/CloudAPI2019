import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OwnAPIService {

  heroID: number;
  heroName: string;
  heroDescription: string;
  heroHealth: number;

  // GetName(pageNum){
  //   return this.http.get<Map[]>(`https://overwatch-api.net/api/v1/hero?page=${pageNum}&limit=9`)
  // }

  mapID :number;

  GetMap(pageNum,sort,dir){
    return this.http.get<Mapinfo[]>(`http://localhost:50073/api/maps?page=${pageNum}&limit=3&sort=${sort}&dir=${dir}`)
  }

  GetMapID(id){
    return this.http.get<Mapinfo[]>(`http://localhost:50073/api/maps/${id}`)
  }
  PassMapID(id){
    this.mapID = id;
  }

  MapID(){
    return this.mapID;
  }

  


  DeleteMap(id){
    return this.http.delete<Mapinfo>(`http://localhost:50073/api/maps/${id}`).subscribe();
  }

  PostMap(i){
    this.http.post<Mapinfo[]>("http://localhost:50073/api/maps",{"mapname": i.mapname,"description": i.description,"location": i.location,"order": i.order}).subscribe((data) =>{console.log(data)})
  }

  PutMap(id){
    return this.http.get<Mapinfo>(`http://localhost:50073/api/maps/${id}`)
  }


  

  constructor(private http: HttpClient) {}
}



  export interface Mapinfo {
      id: number;
      mapname: string;
      description: string;
      location: string;
      order: number;
  }


