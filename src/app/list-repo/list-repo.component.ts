import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
    selector: 'app-list-repo',
    templateUrl: './list-repo.component.html',
    styleUrls: ['./list-repo.component.css']
})
export class ListRepoComponent implements OnInit {

    constructor(private _githubService: GithubService) { }

    private listRepo;

    ngOnInit() {
        this._githubService.getRepoList()
                .subscribe(data => this.listRepo = data);
    }

}
