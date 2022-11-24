import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DogService } from 'src/app/dog.service';
import { Dog } from 'src/app/models/dog';

@Component({
  selector: 'app-adopted-dog-item',
  templateUrl: './adopted-dog-item.component.html',
  styleUrls: ['./adopted-dog-item.component.sass']
})
export class AdoptedDogItemComponent implements OnInit {

  @Input()
  dog!: Dog;

  constructor(private dogService: DogService, private router: Router) { }

  ngOnInit(): void {
  }

  delete(id: number): void {
    this.dogService.deleteDog(id).subscribe((rep) =>
    //this.router.navigateByUrl('/'));
    window.location.reload())
  }

}
