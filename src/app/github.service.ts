import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { retry, catchError  } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class GithubService {

    constructor(private http: HttpClient) { 
    }
    
    private headers = {
        "Authorization": 'Token 39e2d6429d2e617351b144d235a4581492295c77'
    }
    private userName = "itsmeavinashprasad";
    private httpOptions = {
        "method" : "GET",
        "headers" : this.headers
    }
    
    private repodetails: any;
    private searchRepoDetails: any;
    

    getUserData() {
        var url = "https://api.github.com/users/" + this.userName;
        return this.http.get(url, this.httpOptions);
        
    }
    getRepoList(){
        var url = "https://api.github.com/user/repos";
        return this.http.get(url, this.httpOptions);
        
    }
    
    getSearchInfo(keyword){
        var url = "https://api.github.com/search/repositories?q="+keyword;
        return this.http.get(url, this.httpOptions);
        
    }

    postRepoRequest(jsonString):Observable<any>{
        var url = "https://api.github.com/user/repos";
        console.log('in service: ' + jsonString);
        return this.http.post<any>(url, jsonString, this.httpOptions);
    }

    setRepoDetails(repodetails:any){
        this.repodetails = repodetails;
    }

    getRepoDetails(){
        return this.repodetails;
    }

    getUserName(){
        return this.userName;
    }

    deleteRepo(){
        
        var url = "https:api.github.com/repos/"+this.userName+"/"+this.repodetails.name;
        if(confirm('You are about to delete: ' + url) == true){
            return this.http.delete(url, this.httpOptions);
        }
    }

    // handleError(error: HttpErrorResponse){
    //     return throwError( error.message || "Custome Error Msg");

    // }


}
