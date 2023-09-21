import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteService } from './note.service';
import { Note } from './note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  formNote!: FormGroup;
  constructor(private fb:FormBuilder,private ns:NoteService ){}
  ngOnInit(): void {
    this.formNote=this.fb.group({
      valeurNote:['',Validators.required],
    })
  }
  ajoutNote(){
      let notes:Note = {
         note: this.formNote?.get('valeurNote')?.value
      };
      this.ns?.ajouterNote(notes).subscribe
        ({
          next:data=>{
            alert('bien enregistrer');
          },
          error:err=>{
            console.log("erreur")
          }
        }
          );
  }

}
