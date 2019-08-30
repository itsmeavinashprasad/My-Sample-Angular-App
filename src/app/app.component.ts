import { Component, OnInit } from '@angular/core';
import { GithubService } from './github.service';
import { User } from 'src/assets/userInterface';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    title = 'github-webapp';

    constructor (private _githubService : GithubService) {

    }

    public userJson:any;

    ngOnInit() {
        this._githubService.getUserData()
            .subscribe(data => this.userJson = data);
    }
}
