import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import {AdoptedDogListComponent} from "./home-page/adopted-dog-list/adopted-dog-list.component";
import {UnadoptedDogListComponent} from "./home-page/unadopted-dog-list/unadopted-dog-list.component";
import {FormComponent} from "./form/form.component";

const routes: Routes = [{
  path: '' ,
  component: HomePageComponent
},
  {
    path: 'unadopted' ,
    component: UnadoptedDogListComponent
  },

  {
    path: 'adopted' ,
    component: AdoptedDogListComponent
  },

  {
    path: 'form' ,
    component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
