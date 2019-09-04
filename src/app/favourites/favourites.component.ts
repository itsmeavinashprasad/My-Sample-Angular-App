import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

  constructor(private _githubService: GithubService,
              private router: Router) { }

  private listFavs:any;

  ngOnInit() {
    this._githubService.getFavourites()
      .subscribe(data => this.listFavs = data);
  }

  setRepoDetails(index){
    var repodetails = this.listFavs[index];
    this.router.navigate(['/details', repodetails.owner, repodetails.name ]); 

  }

}
