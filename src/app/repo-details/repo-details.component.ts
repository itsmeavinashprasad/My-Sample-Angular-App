import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GithubService } from '../github.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.css']
})


export class RepoDetailsComponent implements OnInit {
  
  private owner: string;
  private reponame: string;
  constructor(private router: Router, 
              private _githubService: GithubService, 
              private http: HttpClient,
              private route: ActivatedRoute) { 

                this.route.params.subscribe(params => {
                  this.owner = params['owner'];
                  this.reponame = params['reponame'];
                });
                
              }

  
  private repoDetails: any;
  private isowner: boolean;
  private isfav: boolean;

  ngOnInit() {
  
    this._githubService.getRepoDetails(this.owner, this.reponame)
      .subscribe(data => this.repoDetails = data);
    
    if( this._githubService.getUserName() == this.owner){
      this.isowner=true;
    }
    else{
      this.isowner=false;
    }
    
    this._githubService.isFav(this.reponame)
      .subscribe( (data) => {
        console.log("data: ",data);
        if(data['length'] == 0)
          this.isfav = false;
        else
          this.isfav = true;
      }); 
  }

  deleteRepo(){

    if(confirm('Delete : ' + this.repoDetails.name+' ?') == true ){
      this._githubService.deleteRepo().subscribe();
      this.router.navigate(['']);
    }
  }

  deleteFromFavourites(){
    if( confirm("Delete " + this.repoDetails.name + " from favourites ?") == true ){
      
      this._githubService.deleteFromFavourites(this.repoDetails.id).subscribe();

    }
    

  }

  addToFavourites(){
    
    if (confirm("Add " + this.repoDetails.name + " to favourites ?") == true ){

      var jsonObj = {
        id: String(this.repoDetails.id),
        name: this.repoDetails.name,
        owner: this.repoDetails.owner.login,
        comments: ""
      };

      this._githubService.addToFavourites(jsonObj).subscribe();
    }


  }

}
