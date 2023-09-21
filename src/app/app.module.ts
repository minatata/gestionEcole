import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { MatiereComponent } from './matiere/matiere.component';
import { NoteComponent } from './note/note.component';
import { ListeComponent } from './liste/liste.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { MatiereService } from './matiere/matiere.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NoteService } from './note/note.service';
import { InscriptionService } from './inscription/inscription.service';
import { EnseignantService } from './enseignant/enseignant.service';
import { SerachPipe } from './inscription/serach.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    EnseignantComponent,
    MatiereComponent,
    NoteComponent,
    ListeComponent,
    LoginComponent,
    SerachPipe

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    RouterModule.forRoot([
     // { path: '', redirectTo: '/login', pathMatch: 'full' },
   //   { path: '', component: LoginComponent },
      {path:"enseignant",component:EnseignantComponent},
      {path:"matiere",component:MatiereComponent},
      {path:"note",component:NoteComponent},
      {path:"inscription",component:InscriptionComponent},
      {path:"liste",component:ListeComponent}
    ]
  
    ),
    BrowserAnimationsModule,
    MatIconModule, // Ajoutez MatInputModule ici
    MatIconModule, // Ajoutez MatIconModule ici
    MatFormFieldModule,
  ],
  providers: [MatiereService ,NoteService,InscriptionService,EnseignantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
