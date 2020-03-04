import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ArnaudNeonoos';


  places = [];

  post = {
    "name": '',
    "description": '',
    "address": '',
    "lat": 0,
    "lng": 0,
    "rating": 0,
  };

  field;

  constructor(private http: HttpClient) {

    this.getData();

  }



  filter() {

    console.log("votre recherhce est: ");
    console.log(this.field);

    // Filtrer avec form
    let url = "https://arnaud.neonoos.com/places?filter[lat_from]=" + this.field;
    // let url = "http://arnaud.neonoos.com/places?filter[lng]=" + this.field;
    // 18.355509
    // 

    let data: Observable<any> = this.http.get(url);
    data.subscribe(result => {

      this.places = result.data;



      console.log("Le filtre");
      console.log(result.data);
      // console.log(result.data.id);

    });

  }

  annuler() {

    this.post.name = '';
    this.post.address = '';
    this.post.description = '';
    this.post.rating = 0;
    console.log("Vous avez annulez l'envoi du formulaire");
  }


  // GET
  getData() {

    let url = "https://arnaud.neonoos.com/places";
    let data: Observable<any> = this.http.get(url);
    data.subscribe(result => {

      this.places = result.data;

      console.log("listes des places");
      console.log(result.data);
      console.log(result.data.id);

    });
  }



  // POST
  postData() {


  

    let url = "https://arnaud.neonoos.com/places";

    let data: Observable<any> = this.http.post(url, this.post);
    data.subscribe(result => {

      console.log("les donnees posté")
      console.log(this.post)
      // this.places = result.data;

      console.log("listes des places");
      console.log(result.data);
    });


    console.log("vous avez posté")

    this.post.name = '';
    this.post.address = '';
    this.post.description = '';
    // this.post.rating = ;
    console.log("le formulair est remi à 0")
  }

  delData(id) {


    console.log("l'identifiant selectionné :" + id)

    let url = "https://arnaud.neonoos.com/places/" + id;
    let data: Observable<any> = this.http.delete(url, id);
    data.subscribe(() => {

      // this.places = result.data;

    });
    console.log("vous avez supprimé l'id " + id);
  }


  editData(id) {

    let url = "https://arnaud.neonoos.com/places/" + id;

    let data: Observable<any> = this.http.patch(url, this.post);
    data.subscribe(result => {

      console.log("les donnees posté")
      console.log(this.post)
      // this.places = result.data;

      console.log("listes des places");
      console.log(result.data);
    });
    console.log("bien modifier")
    console.log("l'id: " + id);
  }



}
