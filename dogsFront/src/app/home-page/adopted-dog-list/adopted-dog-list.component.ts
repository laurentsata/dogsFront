import {Component, OnInit} from '@angular/core';
import {DogService} from "../../dog.service";
import {Dog} from "../../models/dog";

@Component({
  selector: 'app-adopted-dog-list',
  templateUrl: './adopted-dog-list.component.html',
  styleUrls: ['./adopted-dog-list.component.sass']
})
export class AdoptedDogListComponent implements OnInit{
  adoptedDogs: Dog[] = [];

  constructor(private dogService: DogService) { }

  ngOnInit(): void {
    this.dogService.findAllAdoptedDogs().subscribe(dogs => this.adoptedDogs = dogs);
  }

}
