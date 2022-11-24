import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private dogService: DogService, private router: Router) {
    //this.router.routeReuseStrategy.shouldReuseRoute = () => {return false;}
   }

  ngOnInit(): void {
  }

  delete(id: number): void {
    this.dogService.deleteDog(id).subscribe((rep) =>
    //this.router.navigateByUrl('/'));
    window.location.reload())
  }

}
