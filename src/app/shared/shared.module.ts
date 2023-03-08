import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ThumbnailComponent } from './thumbnail/thumbnail.component';
import { MenuSliderComponent } from './menu-slider/menu-slider.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    ThumbnailComponent,
    MenuSliderComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    MenuSliderComponent,
    NavbarComponent,
    ThumbnailComponent,
  ],
})
export class SharedModule {}
