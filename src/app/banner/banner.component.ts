import { Component } from '@angular/core';
import { TesteoService } from '../testeo.service';
@Component({
  selector: 'app-banner',
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  constructor (private test: TesteoService){
  }
  saludar(){
    this.test.saludar()
  }
}
