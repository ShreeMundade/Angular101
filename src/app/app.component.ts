import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Just Puppers!';
  breed:string='labrador' ;
  findDog(){
    console.log(this.breed);
  }
}
