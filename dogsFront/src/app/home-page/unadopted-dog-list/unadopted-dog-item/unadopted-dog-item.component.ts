import { Component, OnInit, Input } from '@angular/core';
import { Dog } from 'src/app/models/dog';

@Component({
  selector: 'app-unadopted-dog-item',
  templateUrl: './unadopted-dog-item.component.html',
  styleUrls: ['./unadopted-dog-item.component.sass']
})
export class UnadoptedDogItemComponent implements OnInit {

  @Input()
  dog!: Dog;

  constructor() { }

  ngOnInit(): void {
  }

}
