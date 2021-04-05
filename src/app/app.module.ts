import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import {NgxPaginationModule} from 'ngx-pagination';
// import {HttpClientModule} from '@angular/common/http'

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons';
import { faAngular as fabAngular, faTwitter as fabTwitter, faFacebook as fabFacebook, faReact as fabReact} from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgxPaginationModule,
    // HttpClientModule
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(fasStar, farStar, fabAngular, fabTwitter, fabFacebook, fabReact);
  }
}
