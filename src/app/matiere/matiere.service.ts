import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Matiere } from "./matiere";
import { Observable } from "rxjs";
//import { API_URLS } from "../config/api.url.config";

@Injectable()
export class MatiereService{
     baseUrl= 'http://localhost:8080/api/matiere';
    constructor (private http:HttpClient){
    }
    ajouterMatiere(matiere:Matiere):Observable<any>{
        return this.http.post<Matiere>(this.baseUrl, matiere);
    }
    public getAllMatiere(): Observable<any> {
        return this.http.get(this.baseUrl);
    }
    deleteData(nomMatiere: string): Observable<void> {
        const url = `${this.baseUrl}/${nomMatiere}`;
        return this.http.delete<void>(url);
      }
      getData(): Observable<any> {
        const url = `${this.baseUrl}`;
        return this.http.get<any>(url);  
      }   
}