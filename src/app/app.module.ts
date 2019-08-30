import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubService } from './github.service';

import { HttpClientModule } from '@angular/common/http';
import { ProfileSidebarComponent } from './profile-sidebar/profile-sidebar.component';
import { OthersComponent } from './others/others.component';
import { ListRepoComponent } from './list-repo/list-repo.component';
import { SearchRepoComponent } from './search-repo/search-repo.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileSidebarComponent,
    OthersComponent,
    ListRepoComponent,
    SearchRepoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
