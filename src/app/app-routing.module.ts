import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursComponent } from './components/cours/cours.component';
import { ExercicesComponent } from './components/exercices/exercices.component';
import { QuestionComponent } from './components/exercices/quiz/question/question.component';
import { QuizComponent } from './components/exercices/quiz/quiz.component';
import { ListeModulesComponent } from './components/liste-modules/liste-modules.component';
import { ModulesComponent } from './components/modules/modules.component';
import { UserComponent } from './users/user/user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/liste-modules',
    pathMatch: 'full',
  },
  {
    path: 'liste-modules',
    component: ListeModulesComponent,
  },
  {
    path: 'module/:id',
    component: ModulesComponent,
  },
  {
    path: 'exercice/:id',
    component: ExercicesComponent,
    children: [
      {
        path: '',
        component: QuizComponent,
      },
      {
        path: 'question',
        component: QuestionComponent,
      },
    ],
  },
  {
    path: 'cours/:id',
    component: CoursComponent,
  },
  {
    path: 'profil/:id',
    component: UserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
