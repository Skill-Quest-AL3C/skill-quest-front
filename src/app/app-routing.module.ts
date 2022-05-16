import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursComponent } from './components/cours/cours.component';
import { ExercicesComponent } from './components/exercices/exercices.component';
import { ListeModulesComponent } from './components/liste-modules/liste-modules.component';
import { ModulesComponent } from './components/modules/modules.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/liste-modules',
    pathMatch: 'full'
  },
  {
    path: 'liste-modules',
    component: ListeModulesComponent,
  },
  {
    path: 'modules',
    component: ModulesComponent,
    children:[
      {path: ':id', component: ModulesComponent}
    ]
  },
  {
    path: 'exercices',
    component: ExercicesComponent,
  },
  {
    path: 'cours',
    component: CoursComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }