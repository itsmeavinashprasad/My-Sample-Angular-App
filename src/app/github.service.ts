import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/assets/userInterface';
import { TouchSequence } from 'selenium-webdriver';
import { Observable } from 'rxjs';
import { ConstantPool } from '@angular/compiler';

@Injectable({
    providedIn: 'root'
})
export class GithubService {

    constructor(private http: HttpClient) { 
    }
    
    private headers = {
        "Authorization": 'Token c8e85c671bbbecb223fc601ca819a32f9bdcfe38'
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

    postRepoRequest(jsonString):Observable<any>{
        var url = "https://api.github.com/user/repos";
        console.log('in service: ' + jsonString);
        return this.http.post<any>(url, jsonString, this.httpOptions);
    }

}
