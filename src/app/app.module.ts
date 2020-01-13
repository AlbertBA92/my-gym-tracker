import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatCardModule, MatButtonModule, MatProgressSpinnerModule, MatFormFieldModule, MatInputModule, MatNativeDateModule, MatDatepickerModule, MatDialogModule, MAT_DATE_LOCALE } from '@angular/material';
import { NewComponent } from './new/new.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';
import { EditComponent } from './edit/edit.component';
import { ResolveEditExerciseService } from './services/resolve-edit-exercise.service';
import { ResolveHomeExercise } from './services/resolve-home.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewComponent,
    DialogBodyComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [
    DatePipe,
    ResolveEditExerciseService,
    ResolveHomeExercise
  ],
  bootstrap: [AppComponent],
  entryComponents: [DialogBodyComponent]
})
export class AppModule { }
