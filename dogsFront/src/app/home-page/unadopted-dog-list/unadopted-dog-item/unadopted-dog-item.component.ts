import { outputAst } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DogService } from 'src/app/dog.service';
import { Dog } from 'src/app/models/dog';

@Component({
  selector: 'app-unadopted-dog-item',
  templateUrl: './unadopted-dog-item.component.html',
  styleUrls: ['./unadopted-dog-item.component.sass']
})
export class UnadoptedDogItemComponent implements OnInit {

  @Input()
  dog!: Dog;

  @Output()
  refresh: EventEmitter<void> = new EventEmitter();


  constructor(private dogService: DogService, private router: Router) {
    //this.router.routeReuseStrategy.shouldReuseRoute = () => {return false;}
   }

  ngOnInit(): void {
  }

  delete(id: number): void {
    this.dogService.deleteDog(id).subscribe((rep) =>
    //this.router.navigateByUrl('/'));
    this.refresh.emit())
  }

  adopt(): void {
    this.dogService.adoptDog(this.dog.id).subscribe((rep) =>
    //this.router.navigateByUrl('/'));
    this.refresh.emit())
  }

}
