import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
<<<<<<< Updated upstream
import { QuestionComponent } from './components/exercices/quiz/question/question.component';
import { ChangeBgDirective } from './components/exercices/quiz/change-bg.directive';
=======
import { BackgroundDirective } from './components/exercices/background.directive';
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
    QuestionComponent,
    ChangeBgDirective,
=======
    BackgroundDirective,
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
