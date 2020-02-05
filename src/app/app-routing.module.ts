import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { ResolveEditExerciseService } from './services/resolve-edit-exercise.service';
import { ResolveHomeExercise } from './services/resolve-home.service';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, resolve: {
      exercises: ResolveHomeExercise
  } },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'new', component: EditComponent },
  { path: 'edit/:id', component: EditComponent, resolve: {
    exercise: ResolveEditExerciseService
  } },
  { path: '', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
