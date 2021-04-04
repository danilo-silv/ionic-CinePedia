import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LogoComponent } from './illustration/logo/logo.component';
import { HomeCinemaComponent } from './illustration/home-cinema/home-cinema.component';
import { SearchComponent } from './illustration/search/search.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { BannerComponent } from './banner/banner.component';
import { CardCarrouselComponent } from './card-carrousel/card-carrousel.component';
import { CardSearchComponent } from './card-search/card-search.component';
import { NotFoundComponent } from './illustration/not-found/not-found.component';

@NgModule({
  imports: [IonicModule, CommonModule],
  exports: [
    LogoComponent,
    HomeCinemaComponent,
    SearchComponent,
    NotFoundComponent,
    HeaderComponent,
    CarrouselComponent,
    BannerComponent,
    CardCarrouselComponent,
    CardSearchComponent,
  ],
  declarations: [
    LogoComponent,
    HomeCinemaComponent,
    SearchComponent,
    NotFoundComponent,
    HeaderComponent,
    CarrouselComponent,
    BannerComponent,
    CardCarrouselComponent,
    CardSearchComponent,
  ],
})
export class ComponentsModule {}
