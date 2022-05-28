import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ModulesComponent } from './components/modules/modules.component';
import { ExercicesComponent } from './components/exercices/exercices.component';
import { CoursComponent } from './components/cours/cours.component';
import { ListeModulesComponent } from './components/liste-modules/liste-modules.component';
import { UserComponent } from './users/user/user.component';
import { QuizComponent } from './components/exercices/quiz/quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    ModulesComponent,
    ExercicesComponent,
    CoursComponent,
    ListeModulesComponent,
    UserComponent,
    QuizComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
