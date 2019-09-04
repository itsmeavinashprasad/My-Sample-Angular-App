import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    title = 'github-webapp';

    constructor (private router : Router) {

    }

    ngOnInit() {
    }

    letsSearch(keyword){

        if(keyword == ''){
            console.log('null keyword');
            return;
        }
        else{
            (document.getElementById('searchForm') as HTMLFormElement).reset()
            this.router.navigateByUrl('').then(() => {
            this.router.navigate(['/search',keyword]);});
        }
    }

    goHome(){
        this.router.navigate(['']);
    }

    newRepo(){
        this.router.navigate(['/newrepo']);
    }

    favourites(){
        this.router.navigate(['/favourites']);
    }
}
