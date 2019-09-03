import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubService } from './github.service';

import { HttpClientModule } from '@angular/common/http';
import { ProfileSidebarComponent } from './profile-sidebar/profile-sidebar.component';
import { OthersComponent } from './others/others.component';
import { NewRepoComponent } from './new-repo/new-repo.component';
import { FormsModule } from '@angular/forms';
import { RepoDetailsComponent } from './repo-details/repo-details.component';
import { FavouritesComponent } from './favourites/favourites.component';
// import { ListRepoComponent } from './list-repo/list-repo.component';
// import { SearchRepoComponent } from './search-repo/search-repo.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileSidebarComponent,
    OthersComponent,
    routingComponents,
    NewRepoComponent,
    RepoDetailsComponent,
    FavouritesComponent,
    // ListRepoComponent,
    // SearchRepoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
