import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { FaqComponent } from './modules/faq/faq.component';
import { HomeComponent } from './modules/home/home.component';
import { NavbarComponent } from './modules/navbar/navbar.component';
import { FooterComponent } from './modules/footer/footer.component';
import { FragListComponent } from './modules/fragrance-list/frag-list.component';
import { FragranceModalComponent } from './modules/fragrance-modal/fragrance-modal.component';
import { FragranceComponent } from './modules/fragrance/fragrance.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { ParfyumiCommonModule } from './modules/common/parfyumi-common.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ParfyumiCarouselComponent } from './modules/common/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    FragListComponent,
    FragranceComponent,
    FragranceModalComponent,
    FaqComponent,
    NotFoundComponent,
    ParfyumiCarouselComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ParfyumiCommonModule,
    FontAwesomeModule,
    StoreModule.forRoot({}, {}),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
