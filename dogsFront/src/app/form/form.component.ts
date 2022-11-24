import { Component, OnInit } from '@angular/core';
import { DogService } from '../dog.service';
// import { Order } from './sign-up.component';

@Component({
  selector: 'app-form.component',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit{
  model: Order = new Order("", "", "", "", "", "" );
  submitted:boolean = false;
  router: any;
  dogService: any;
  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(): void {
    // form submitted
    //this.submitted = true;
    //console.log(this.model);
    this.dogService.update(this.dogUpdate)
     .subscribe(() => {
        this.router.navigate(['']);
      });
  }
  dogUpdate(dogUpdate: any) {
    throw new Error('Method not implemented.');
  }
}

export class Order {
  constructor(
    public imgURL: string,
    public name: string,
    public sex: string,
    public color: string,
    public race: string,
    public isAdopted: string,
  ) {}
}
