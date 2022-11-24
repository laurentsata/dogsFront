import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';
import { Router } from '@angular/router';
import { Dog } from '../models/dog';

// import { Order } from './sign-up.component';

@Component({
  selector: 'app-form.component',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit{
  model: Dog = {id: 0, name:"", color:"", imgUrl:"", race:"", isAdopted:false, sex:""};
  submitted:boolean = false;

  constructor(private service:DogService, private router:Router) { }



  ngOnInit(): void {
  }


  onSubmit(): void {
    // form submitted
    //this.submitted = true;
    //console.log(this.model);
    this.service.create(this.model)
     .subscribe(() => {
        this.router.navigate(['']);
      });
  }
  
}


