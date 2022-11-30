import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrantsListComponent } from './modules/seminars-with-registrants/registrants-list/registrants-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes =[
  
 // { path: "", pathMatch: "full", redirectTo: "page" },
  { path: "seminarsWithRegistrants", loadChildren: () => import("./modules/seminars-with-registrants/seminars-with-registrants.module").then(m => m.SeminarWithRegistrantsModule)},
  { path: "**",pathMatch:"full", component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
