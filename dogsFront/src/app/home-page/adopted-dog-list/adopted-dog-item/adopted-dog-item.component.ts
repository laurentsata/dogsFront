import { Component, OnInit, Input } from '@angular/core';
import { Dog } from 'src/app/models/dog';

@Component({
  selector: 'app-adopted-dog-item',
  templateUrl: './adopted-dog-item.component.html',
  styleUrls: ['./adopted-dog-item.component.sass']
})
export class AdoptedDogItemComponent implements OnInit {

  @Input()
  dog!: Dog;

  constructor() { }

  ngOnInit(): void {
  }

}

