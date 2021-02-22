import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ngx-pagi';

p: number = 1;
collection: any; 

constructor( private http: HttpClient) {}

  ngOnInit() {
this.getAllData();
  }

  getAllData() {
      const url = "https://api.instantwebtools.net/v1/passenger";
    this.http.get(url).subscribe((data: any) => {
      console.log(data);
      this.collection =  data;
      this.p =  0
    })
  };
}

