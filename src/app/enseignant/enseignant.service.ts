import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Enseignant } from "./enseignant";
import { Observable } from "rxjs";
//import { API_URLS } from "../config/api.url.config";

@Injectable()
export class EnseignantService{
     baseUrl= 'http://localhost:8080/api/enseignant';
    constructor (private http:HttpClient){
    }
   public inscrireEnsei(enseignant:Enseignant):Observable<any>{
        return this.http.post<Enseignant>(this.baseUrl, enseignant);
    }
    public getAllEnseignants(): Observable<any> {
          return this.http.get(this.baseUrl);
    }
}