import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListRepoComponent } from './list-repo/list-repo.component';
import { SearchRepoComponent } from './search-repo/search-repo.component';


const routes: Routes = [
  { path: '', redirectTo: '/repos', pathMatch: 'full' },
  { path: 'repos', component: ListRepoComponent },
  { path: 'search', component: SearchRepoComponent },
  { path: 'search/:keyword', component: SearchRepoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  ListRepoComponent,
  SearchRepoComponent
]