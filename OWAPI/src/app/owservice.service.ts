import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OWServiceService {

  heroID: number;
  heroName: string;
  heroDescription: string;
  heroHealth: number;

  GetName(pageNum){
    return this.http.get<HerominInfo[]>(`https://overwatch-api.net/api/v1/hero?page=${pageNum}&limit=9`)
  }

  GetHero(id){
    return this.http.get<HerominInfo>(`https://overwatch-api.net/api/v1/hero/${id}`)
  }

  PassID(id){
    this.heroID = id;
  }

  GetID(){
    return this.heroID;
  }


  

  constructor(private http: HttpClient) {}
}

export interface Role {
  id: number;
  name: string;
}

export interface SubRole {
  id: number;
  name: string;
}

export interface Ability {
  id: number;
  name: string;
  description: string;
  is_ultimate: boolean;
  url: string;
}

export interface Cost {
  currency: string;
  value: number;
}

export interface Type {
  id: number;
  name: string;
  url: string;
}

export interface Quality {
  name: string;
}

export interface Event {
  id: number;
  name: string;
  start_date: string;
  end_date: string;
  url: string;
}

export interface Reward {
  id: number;
  name: string;
  cost: Cost;
  url: string;
  type: Type;
  quality: Quality;
  event: Event;
}

export interface HerominInfo {
  id: number;
  name: string;
  description: string;
  health: number;
  armour: number;
  shield: number;
  real_name: string;
  age: number;
  height?: any;
  affiliation: string;
  base_of_operations: string;
  difficulty: number;
  url: string;
  role: Role;
  sub_roles: SubRole[];
  abilities: Ability[];
  rewards: Reward[];
}
