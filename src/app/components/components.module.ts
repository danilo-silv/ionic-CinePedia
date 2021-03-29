import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LogoComponent } from './illustration/logo/logo.component';
import { HomeCinemaComponent } from './illustration/home-cinema/home-cinema.component';

@NgModule({
  imports: [IonicModule],
  exports: [LogoComponent, HomeCinemaComponent],
  declarations: [LogoComponent, HomeCinemaComponent],
})
export class ComponentsModule {}
