import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Enseignant } from './enseignant';
import { EnseignantService } from './enseignant.service';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent {
  Enseignant: any[] = [];
enseiForm!: FormGroup;
constructor(private fb:FormBuilder,private es:EnseignantService){}
ngOnInit(){
  console.log("eta0");
  this.enseiForm=this.fb.group({
    nom:['',Validators.required],
    prenom:['',Validators.required],
    adresse:['',Validators.required],
    telephone:['',Validators.required],
    email:['',Validators.required]
    
  })
  
 /* this.infoForm=this.fb.group({
   
 })*/
 this.loadEnseignants();
}
termeRecherche = '';
formulaireVisible = false;
public afficherFormulaire(){
 this.formulaireVisible=true;
}
public rechercher() {
  // Implémentez la logique de recherche ici en fonction de termeRecherche
}

saveMatiere(){
  this.formulaireVisible = false;
}
public loadEnseignants(): void {
  this.es.getAllEnseignants().subscribe(
    (data) => {
      this.Enseignant = data;
    },
    (error) => {
      console.error(error);
    }
  );
}
public  inscrireEnseignant(): void {

  console.log("eta2");
  let ins:Enseignant = {
 //    nomMatiere: this.matiereForm?.get('matiereName')?.value,
   nomEns: this.enseiForm?.get('nom')?.value,
   prenomEns: this.enseiForm?.get('prenom')?.value,
   adres: this.enseiForm?.get('adresse')?.value,
   tel: this.enseiForm?.get('telephone')?.value,
   mail: this.enseiForm?.get('email')?.value,
   matiere: this.enseiForm?.get('matiere')?.value,
  }
  console.log(ins);
  this.es.inscrireEnsei(ins).subscribe({
    next:data=>{
      alert('bien enregistrer');
    },
    error:err=>{
      console.log("erreur")
      alert('error');
    }
  }
    )
    ;
};   

}
