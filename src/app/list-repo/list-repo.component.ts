import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-list-repo',
    templateUrl: './list-repo.component.html',
    styleUrls: ['./list-repo.component.css']
})
export class ListRepoComponent implements OnInit {

    constructor(private _githubService: GithubService, private router: Router) { }

    private listRepo;

    ngOnInit() {
        this._githubService.getRepoList()
                .subscribe(data => this.listRepo = data);
    }

    setRepoDetails(index){
        var repodetails = this.listRepo[index];
        this._githubService.setRepoDetails(repodetails);
        this.router.navigate(['/details']);

    }

}
