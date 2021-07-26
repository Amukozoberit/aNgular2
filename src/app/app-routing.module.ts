import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { GitInterfaceComponent } from './components/git-interface/git-interface.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RepoDesignComponent } from './components/repo-design/repo-design.component';

const routes: Routes = [
  {path:'about',component:AboutComponent},
  {path:'repo/:username',component:RepoDesignComponent},
  {path:'gitinterface',component:GitInterfaceComponent},
  {path:'',component:GitInterfaceComponent},
  { path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
