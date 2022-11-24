import { Component, OnInit } from '@angular/core';
// import { Order } from './sign-up.component';

@Component({
  selector: 'app-form.component',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit{
  model: Order = new Order("", "", "", "", "", "" );
  submitted:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(): void {
    // form submitted
    this.submitted = true;
    console.log(this.model);
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
