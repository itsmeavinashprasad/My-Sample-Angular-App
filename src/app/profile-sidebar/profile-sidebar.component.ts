import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
    selector: 'app-profile-sidebar',
    templateUrl: './profile-sidebar.component.html',
    styleUrls: ['./profile-sidebar.component.css']
})
export class ProfileSidebarComponent implements OnInit {

    constructor(private _githubService: GithubService) { }


    public userJson:any;

    ngOnInit() {
        this._githubService.getUserData()
            .subscribe(data => this.userJson = data);

    }

}
