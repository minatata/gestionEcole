import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Note } from "./note";
import { Observable } from "rxjs";
//import { API_URLS } from "../config/api.url.config";

@Injectable()
export class NoteService{
     baseUrl= 'http://localhost:8080/api/note';
    constructor (private http:HttpClient){
    }
    ajouterNote(note:Note):Observable<any>{
        return this.http.post<Note>(this.baseUrl,note);
    }
}