import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl: string = "assets/expert_list.json";
  constructor(private http: HttpClient) { 
  }

  getAllDirectories(){
    return this.http.get(this.baseUrl);
  }

}
