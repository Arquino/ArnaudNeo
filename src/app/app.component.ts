import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {  HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ArnaudNeonoos';


  places = [];
  post = {
    name: '',
   description: '',
   address: '',
   lat: 0,
   lng: 0,
   rating: 0,
}

constructor(private http: HttpClient){

  this.getData();
   
}


// GET
getData(){

  let url =  "https://arnaud.neonoos.com/places";
  let data : Observable<any> = this.http.get(url);
  data.subscribe(result => {
    
    this.places = result.data;

    console.log("listes des places");
      console.log(result.data);
      console.log(result.data.id);
       
  });
}



}
