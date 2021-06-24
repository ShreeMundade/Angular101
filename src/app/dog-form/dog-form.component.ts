import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-dog-form',
  templateUrl: './dog-form.component.html',
  styleUrls: ['./dog-form.component.css']
})
export class DogFormComponent implements OnInit {
  breed:string='hound' ;
  subBreed:string='english';
  dogUrl!:string;
  failedToFetch!:boolean;

  constructor(private dogService:DogService){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  findDog(){
    this.dogService.findDog(this.breed,this.subBreed)
    .subscribe(result =>{
      if(result.message){
      this.dogUrl = result.message;
      this.failedToFetch=false;
      }
      else{
        this.failedToFetch=true;
      }
    },err =>{
      console.log(err);
      this.failedToFetch=true;
    })
  }
}
