import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'app-new-repo',
    templateUrl: './new-repo.component.html',
    styleUrls: ['./new-repo.component.css']
})
export class NewRepoComponent implements OnInit {

    constructor(private _githubService: GithubService) { }

    isprivate: "true" ; 

    ngOnInit() {
    }

    onSubmit(repoForm: NgForm ){
        if(repoForm.valid == true){
            console.log(repoForm.value);
        }
        else{
            console.log('Form input not valid');
            console.log(repoForm.value);

            if(repoForm.controls['name'].value == '' ){
                console.log('Here');
                alert("Enter Repository Name");
            }
        }
        // this._githubService.postRepoRequest( JSON.stringify(repoForm) ).subscribe();
    }

}
