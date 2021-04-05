import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

// import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import { faFilm} from '@fortawesome/free-solid-svg-icons';
// import { fasBell } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ngx-pagi';
  // page = 1;
  // passenger: any; 
  // itemsPerPage = 6;
  // totalItems : any;
  // private http: HttpClient
  
  // filmIcon = faFilm;
  // fasbell = fasBell;
  // faCoffee = faCoffee;

  constructor( ) {}

  ngOnInit() {
    // this.getAllData();
  }

  // getAllData() {
  //   this.http.get(`https://api.instantwebtools.net/v1/passenger?page=${1}&size=${this.itemsPerPage}`).subscribe((data: any) => {
  //     this.passenger =  data.data;
  //     this.totalItems = data.totalPassengers;
  //   })
  // };

  // gty(page:any){
  //   this.http.get(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=${this.itemsPerPage}`).subscribe((data: any) => {
  //     this.passenger =  data.data;
  //     this.totalItems = data.totalPassengers;
  //   })
  // }
}

