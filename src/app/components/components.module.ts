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
import { FeedbackIllustrationComponent } from './feedback-illustration/feedback-illustration.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    NgCircleProgressModule.forRoot({
      percent: 0,
      radius: 22,
      space: -3,
      outerStrokeWidth: 2.5,
      innerStrokeWidth: 2.5,
      outerStrokeColor: '#fb6b1a',
      innerStrokeColor: '#ffb88f',
      animationDuration: 300,
    }),
  ],
  exports: [
    LogoComponent,
    HomeCinemaComponent,
    SearchComponent,
    NotFoundComponent,
    FeedbackIllustrationComponent,
    HeaderComponent,
    CarrouselComponent,
    BannerComponent,
    CardCarrouselComponent,
    CardSearchComponent,
    CardDetailComponent,
  ],
  declarations: [
    LogoComponent,
    HomeCinemaComponent,
    SearchComponent,
    NotFoundComponent,
    FeedbackIllustrationComponent,
    HeaderComponent,
    CarrouselComponent,
    BannerComponent,
    CardCarrouselComponent,
    CardSearchComponent,
    CardDetailComponent,
  ],
})
export class ComponentsModule {}
