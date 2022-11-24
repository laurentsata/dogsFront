import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Dog } from '../models/dog';


@Component({
  selector: 'app-form-update',
  templateUrl: './form-update.component.html',
  styleUrls: ['./form-update.component.sass']
})
export class FormUpdateComponent implements OnInit{
  model: Dog = {id: 0, name:"", color:"", imgUrl:"", race:"", isAdopted:false, sex:""};
  submitted:boolean = false;
  id!: number;

  constructor(private service:DogService, private router:Router, private route:ActivatedRoute) { }



  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    })
    //On utilise findDogById
    this.service.findDogById(this.id).subscribe(dog => this.model = dog)
  }


  onSubmit(): void {
    this.service.update(this.model)
      .subscribe(() => {
        this.router.navigate(['']);
      });
  }

}
