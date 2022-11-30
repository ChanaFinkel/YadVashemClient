import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { RegistrantsListComponent } from './registrants-list/registrants-list.component';
import { RouterModule, Routes } from '@angular/router';

const SeminarsWithRegistrants_Routes: Routes = [
  {path:"registrantsList",component:RegistrantsListComponent},
]
@NgModule({
  declarations: [RegistrantsListComponent],
  imports: [
    CommonModule,MaterialModule,RouterModule.forChild(SeminarsWithRegistrants_Routes)]
})
export class SeminarWithRegistrantsModule { }
