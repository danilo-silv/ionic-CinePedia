import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LogoComponent } from './illustration/logo/logo.component';
import { HomeCinemaComponent } from './illustration/home-cinema/home-cinema.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { BannerComponent } from './banner/banner.component';
import { CardCarrouselComponent } from './card-carrousel/card-carrousel.component';

@NgModule({
  imports: [IonicModule, CommonModule],
  exports: [
    LogoComponent,
    HomeCinemaComponent,
    HeaderComponent,
    CarrouselComponent,
    BannerComponent,
    CardCarrouselComponent,
  ],
  declarations: [
    LogoComponent,
    HomeCinemaComponent,
    HeaderComponent,
    CarrouselComponent,
    BannerComponent,
    CardCarrouselComponent,
  ],
})
export class ComponentsModule {}
