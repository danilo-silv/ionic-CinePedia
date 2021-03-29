import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LogoComponent } from './illustration/logo/logo.component';
import { HomeCinemaComponent } from './illustration/home-cinema/home-cinema.component';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [IonicModule, CommonModule],
  exports: [LogoComponent, HomeCinemaComponent, HeaderComponent],
  declarations: [LogoComponent, HomeCinemaComponent, HeaderComponent],
})
export class ComponentsModule {}
