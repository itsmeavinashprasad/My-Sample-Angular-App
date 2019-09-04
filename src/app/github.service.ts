import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class GithubService {

    constructor(private http: HttpClient) { 
    }
    
    private headers = {
        "Authorization": 'Token 2a72bc6a948613776c939a458dd0230ec7b6ceea'
    }
    private userName = "itsmeavinashprasad";
    private httpOptions = {
        "method" : "GET",
        "headers" : this.headers
    }
    
    private repodetails: any;
    private searchRepoDetails: any;
    
    async test(){
        var url = "https://api.github.com/users/" + this.userName;
        var response = await fetch(url);
        var result = await response.json();
        console.log("In Service: " + result);
    }

    //  used to get logged in user profile details to be displayed in sidebar
    getUserData() {
        var url = "https://api.github.com/users/" + this.userName;
        return this.http.get(url, this.httpOptions);
        
    }

    //  used to get logged in user repository details to be displayed in repos
    getRepoList(){
        var url = "https://api.github.com/user/repos";
        return this.http.get(url, this.httpOptions);
    }
    
    //  used to get serach details of keyword
    getSearchInfo(keyword){
        var url = "https://api.github.com/search/repositories?q="+keyword;
        return this.http.get(url, this.httpOptions);
        
    }

    // used to post request to add new repository
    postRepoRequest(jsonString):Observable<any>{
        var url = "https://api.github.com/user/repos";
        console.log('in service: ' + jsonString);
        return this.http.post<any>(url, jsonString, this.httpOptions);
    }

    // used to get repository details 
    getRepoDetails(owner:string, reponame:string){
        var url = "https://api.github.com/repos/"+owner+"/"+reponame; 
        return this.http.get(url, this.httpOptions);
    }
    
    // used to get user name of logged in user
    getUserName(){
        return this.userName;
    }
    
    // used to post request to delete repository
    deleteRepo(reponame:string){
        var url = "https:api.github.com/repos/"+this.userName+"/"+reponame;
        if(confirm('You are about to delete: ' + url) == true){
            return this.http.delete(url, this.httpOptions);
        }
    }

    // used to if reponame exists in favourites.json
    isFav(reponame:string){
    var jsonUrl = "http://localhost:3000/items?name=" + reponame;
    return this.http.get(jsonUrl);

    }

    // used to add any repository to favourites.json
    addToFavourites(jsonObj){
        var jsonUrl = "http://localhost:3000/items/";
        return this.http.post(jsonUrl, jsonObj) ;
    }
    
    // used to delete any repository from favourites.json
    deleteFromFavourites(repoId){
        var jsonUrl = "http://localhost:3000/items/"+repoId;
        return this.http.delete(jsonUrl) ;
    }

    // used to update comment of item in favourites.json
    updateComment(repoId, jsonObj){
        var jsonUrl = "http://localhost:3000/items/"+repoId;
        return this.http.patch(jsonUrl, jsonObj) ;
    }

    // used to get array of objects in favourites.json
    getFavourites(){
        var jsonUrl = "http://localhost:3000/items/";
        return this.http.get(jsonUrl);
    }


}
