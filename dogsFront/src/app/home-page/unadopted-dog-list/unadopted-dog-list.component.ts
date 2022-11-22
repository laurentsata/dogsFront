import {Component, OnInit} from '@angular/core';
import {DogService} from "../../dog.service";
import {Dog} from "../../models/dog";

@Component({
  selector: 'app-unadopted-dog-list',
  templateUrl: './unadopted-dog-list.component.html',
  styleUrls: ['./unadopted-dog-list.component.sass']
})
export class UnadoptedDogListComponent implements OnInit{
  unadoptedDogs: Dog[] = [];

  constructor(private dogService: DogService) { }

  ngOnInit(): void {
    this.dogService.findAllUnadoptedDogs().subscribe(dogs => this.unadoptedDogs = dogs);
  }

}
