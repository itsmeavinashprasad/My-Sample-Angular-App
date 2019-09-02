import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.css']
})
export class RepoDetailsComponent implements OnInit {

  constructor(private router: Router, private _githubService: GithubService) { }

  private repoDetails;
  ngOnInit() {

    this.repoDetails = this._githubService.getRepoDetails();
  }

  deleteRepo(){

    if(confirm('Delete : ' + this.repoDetails.name+' ?') == true ){
      this._githubService.deleteRepo().subscribe();
      this.router.navigate(['']);
    }
  }

}
