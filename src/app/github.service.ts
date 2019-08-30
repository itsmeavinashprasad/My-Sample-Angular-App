import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/assets/userInterface';
import { TouchSequence } from 'selenium-webdriver';

@Injectable({
    providedIn: 'root'
})
export class GithubService {

    constructor(private http: HttpClient) { 
    }
    
    private headers = {
        "Authorization": 'Token 4048d46706b4c6c97029ad0a28ab7e63ffd06ac2'
    }
    private userName = "itsmeavinashprasad";
    private httpOptions = {
        "method" : "GET",
        "headers" : this.headers
    }

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

}
