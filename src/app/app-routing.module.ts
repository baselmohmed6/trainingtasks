import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {path:'' ,component:HomeComponent},
  {path:'projects',component:ProjectsComponent},
  {path:'about',component:AboutComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
