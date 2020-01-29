import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { ResolveEditExerciseService } from './services/resolve-edit-exercise.service';
import { ResolveHomeExercise } from './services/resolve-home.service';
import { ResolveEditSetService } from './services/resolve-edit-set.service';
import { EditSetComponent } from './shared/edit-set/edit-set.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, resolve: {
      exercises: ResolveHomeExercise
  } },
  { path: 'new', component: NewComponent },
  { path: 'edit/:id', component: EditComponent, resolve: {
    exercise: ResolveEditExerciseService
  } },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
