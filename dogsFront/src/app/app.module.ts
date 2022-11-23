import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UnadoptedDogListComponent } from './home-page/unadopted-dog-list/unadopted-dog-list.component';
import { UnadoptedDogItemComponent } from './home-page/unadopted-dog-list/unadopted-dog-item/unadopted-dog-item.component';
import { AdoptedDogListComponent } from './home-page/adopted-dog-list/adopted-dog-list.component';
import { AdoptedDogItemComponent } from './home-page/adopted-dog-list/adopted-dog-item/adopted-dog-item.component';
import { HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UnadoptedDogListComponent,
    UnadoptedDogItemComponent,
    AdoptedDogListComponent,
    AdoptedDogItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
