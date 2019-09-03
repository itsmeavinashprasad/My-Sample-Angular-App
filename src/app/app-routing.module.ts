import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListRepoComponent } from './list-repo/list-repo.component';
import { SearchRepoComponent } from './search-repo/search-repo.component';
import { NewRepoComponent } from './new-repo/new-repo.component';
import { RepoDetailsComponent } from './repo-details/repo-details.component';
import { FavouritesComponent } from './favourites/favourites.component';


const routes: Routes = [
  { path: '', redirectTo: '/repos', pathMatch: 'full' },
  { path: 'repos', component: ListRepoComponent },
  { path: 'search', component: SearchRepoComponent },
  { path: 'search/:keyword', component: SearchRepoComponent },
  { path: 'newrepo', component: NewRepoComponent },
  { path: 'favourites', component: FavouritesComponent },
  { path: 'details/:owner/:reponame', component: RepoDetailsComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  ListRepoComponent,
  SearchRepoComponent,
  NewRepoComponent,
  FavouritesComponent,
  RepoDetailsComponent
]