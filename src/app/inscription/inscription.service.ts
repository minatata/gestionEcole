import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Inscription } from "./inscription";
import { Observable } from "rxjs";
//import { API_URLS } from "../config/api.url.config";

@Injectable()
export class InscriptionService{
     baseUrl= 'http://localhost:8080/api/create';
    constructor (private http:HttpClient){
    }
   public inscrire(inscription:Inscription):Observable<any>{
        return this.http.post<any>(this.baseUrl, inscription);
    }
    public getAllInscrits(): Observable<any> {
        return this.http.get(this.baseUrl);
    } 
    createMatiereAndAutreTable(formData: any) {
      // Envoyer les données au backend avec une requête POST
      return this.http.post(`${this.baseUrl}/create`, formData);
    }
}