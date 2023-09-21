import { Component, OnInit } from '@angular/core';
import { Matiere } from './matiere';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatiereService } from './matiere.service';

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.css'],
})
export class MatiereComponent implements OnInit {
  aMatiere=false;
  termeRecherche="";
  Matieres:any[] = [];

  originalMatieres: Matiere[] = [];

  public matiereForm!: FormGroup;
  nomMatiere: any;
 // public matSer?: MatiereService | undefined ;

  constructor(private fb:FormBuilder,private ms:MatiereService){}
  ngOnInit(): void {
    this.matiereForm=this.fb.group({
      matiereName:['',Validators.required],
      matiereCoef:['',Validators.required],
    })
    this.loadMatiere();
    
  }
  public search(): void {
    console.log('Fonction search() appelée.');
    console.log('Terme de recherche actuel :', this.termeRecherche);
    console.log('Liste Matieres :', this.Matieres);
    // Appelez la fonction de recherche et mettez à jour la liste Matieres
   
      this.Matieres = this.Matieres.filter(mat=>{
        return mat.nomMatiere.toLocalLowerCase().match(this.nomMatiere.toLocalLowerCase());
      })
    
  
  }
  /*
  public rechercher(mot: string): Matiere[] {
    mot = mot.trim().toLowerCase();
    if (mot === '') {
      return this.originalMatieres; // Aucun filtre appliqué, retourne toutes les matières
    } else {
      return this.originalMatieres.filter(mat => mat.nomMatiere.toLowerCase().includes(mot))
     
  }
}*/
  public adMatiere(){
    this.aMatiere=true;
    
  }
 /* private updateListeMatieres() {
    // Appelez le service pour récupérer la liste des matières
    this.ms.getAllMatiere().subscribe((matieres) => {
      this.Matieres = matieres;
    });
  }*/
  saveMatiere(){
    this.aMatiere=false;
   // this.updateListeMatieres();
  }

  
  public loadMatiere(): void {
    this.ms.getAllMatiere().subscribe(
      (data) => {
     //   this.originalMatieres = data;
        this.Matieres = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }
  addMatiere(): void {
    let mat:Matiere = {
       nomMatiere: this.matiereForm?.get('matiereName')?.value,
       coef: this.matiereForm?.get('matiereCoef')?.value,
    //let mat:Matiere=this.matiereForm.value
    }
    console.log("pink pass");
    console.log(mat);
    this.ms?.ajouterMatiere(mat).subscribe({
      next:data=>{
        alert('bien enregistrer');
      //  this.Matieres.push(data);
         this.matiereForm.reset();
         this.loadMatiere();
      },
      error:err=>{
        console.log("erreur")
      }
    }
      )
      ;
  };  
  
  //SUPPRESSION
  onDeleteClick(nomMatiere: string) {
    this.ms.deleteData(nomMatiere).subscribe(() => {
      // Actualisez la liste après la suppression réussie.
      this.loadData();
    });
  }

  loadData() {
    // Chargez les données depuis le service.
    this.ms.getData().subscribe((data) => {
      // Mettez à jour la liste de données affichée.
      this.Matieres = data;
  
    });
  }
  sortir(){
    this.aMatiere=false;
  }
}
  
  


