import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { ProgressionBarComponent } from './components/exercices/quiz/progression-bar/progression-bar.component';
import { UserHudComponent } from './components/exercices/quiz/user-hud/user-hud.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { QuestionFormComponent } from './components/exercices/quiz/question-form/question-form.component';
import { QuestionsComponent } from './components/exercices/quiz/questions/questions.component';
import { ResultsComponent } from './components/exercices/quiz/results/results.component';
import { WelcomeComponent } from './components/exercices/quiz/welcome/welcome.component';

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
    ProgressionBarComponent,
    UserHudComponent,
    QuestionFormComponent,
    QuestionsComponent,
    ResultsComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
