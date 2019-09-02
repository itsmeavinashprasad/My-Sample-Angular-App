import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubService } from '../github.service';


@Component({
  selector: 'app-search-repo',
  templateUrl: './search-repo.component.html',
  styleUrls: ['./search-repo.component.css']
})
export class SearchRepoComponent implements OnInit {

    constructor(private route: ActivatedRoute, private router: Router, private _githubService: GithubService) { }

    private searchInfo:any;

    ngOnInit() {
        var keyword = this.route.snapshot.paramMap.get('keyword');
        if(keyword != null){
            this._githubService.getSearchInfo(keyword)
                    .subscribe(data => this.searchInfo = data);
        }
    }

    setRepoDetails(index){
        var repodetails = this.searchInfo['items'][index];
        this._githubService.setRepoDetails(repodetails);
        this.router.navigate(['/details']); 

    }


}
