import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { BannerComponent } from './banner/banner.component';

@Component({
  selector: 'app-root',
  imports: [TarjetaComponent, BannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'api';
}
