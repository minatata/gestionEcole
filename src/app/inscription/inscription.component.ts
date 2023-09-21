import { Component,OnInit } from '@angular/core';

import{FormGroup,FormBuilder,Validators} from '@angular/forms';
import { Inscription } from './inscription';
import { InscriptionService } from './inscription.service';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  Inscriptions:any[]=[];

  searchText="";
  afficheForm=false;
public  inscritForm!: FormGroup;
  infoForm!: FormGroup;
  resultatsRecherche: any[] | undefined;
  constructor(private fb:FormBuilder,private is:InscriptionService){}
  ngOnInit(){
    console.log("eta0");
    this.inscritForm=this.fb.group({
      nom:['',Validators.required],
      prenom:['',Validators.required],
      dateDeNaissance:['',Validators.required],
      lieuDeNaissance:['',Validators.required],
      adresse:['',Validators.required],
      telephone:['',Validators.required],
      email:['',Validators.required],
     // sexe:['',Validators.required],
      classe:['',Validators.required],
      redoublant:['',Validators.required],
      AnneeScolaire:['',Validators.required],
      dateInscription:['',Validators.required],
      mode:['',Validators.required],
      Montant:[,Validators.required],
      
    })
    
   /* this.infoForm=this.fb.group({
     
   })*/
   this.loadInscription(); 
  }
  public adInscription(){
    this.afficheForm=true;
  }


//méthode de recherche 
chercher(): void {
  // Filtrer les données en fonction du texte de recherche
  if (this.searchText.trim() === '') {
    // Si le champ de recherche est vide, afficher toutes les données
    this.resultatsRecherche = this.Inscriptions;
  } else {
    // Sinon, filtrer les données en fonction du texte de recherche (en utilisant la méthode filter)
    this.resultatsRecherche = this.Inscriptions.filter((item: any) => {
      // Vous pouvez personnaliser la logique de filtrage ici en fonction de vos besoins
      return JSON.stringify(item).toLowerCase().includes(this.searchText.toLowerCase());
    });
  }
} 
public loadInscription():void{
 
    this.is.getAllInscrits().subscribe(
      (data) => {
        this.Inscriptions = data;
        console.log(data);
        
    
      },
      (error) => {
        console.error(error);
      }
    );
  
}; 
public  inscrireEleve(): void {
  
    console.log("eta2");
    let ins:Inscription = {
   //    nomMatiere: this.matiereForm?.get('matiereName')?.value,
     nomIns: this.inscritForm?.get('nom')?.value,
     prenomIns: this.inscritForm?.get('prenom')?.value,
     dateNaiss: this.inscritForm?.get('dateDeNaissance')?.value,
     lieuNais: this.inscritForm?.get('lieuDeNaissance')?.value,
     adres: this.inscritForm?.get('adresse')?.value,
     tel: this.inscritForm?.get('telephone')?.value,
     mail: this.inscritForm?.get('email')?.value,
   //  sex: this.inscritForm?.get('sexe')?.value,
     clas: this.inscritForm?.get('classe')?.value,
     redoubl: this.inscritForm?.get('redoublant')?.value,
     anneeScol: this.inscritForm?.get('AnneeScolaire')?.value,
     dateIns: this.inscritForm?.get('dateInscription')?.value,
     mod: this.inscritForm?.get('mode')?.value,
     mont: this.inscritForm?.get('Montant')?.value,
    }
    //console.log(ins);
    this.is.inscrire(ins).subscribe({
      next:data=>{
        this.loadInscription;

        alert('bien enregistrer');
        console.log(data);
     
        this.loadInscription;

        // Réinitialiser le formulaire
        this.inscritForm.reset();
      },
      error:err=>{
        console.log("erreur: ",err);
        alert('error');
      }
    }
      )
      ;
  };  
  
  onDeleteClick(){

  }
  sortir(){
    this.afficheForm=false;
  }

}
