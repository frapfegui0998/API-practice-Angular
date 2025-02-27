import { Component } from '@angular/core';
import { TesteoService } from '../testeo.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-tarjeta',
  imports: [HttpClientModule],
  templateUrl: './tarjeta.component.html',
  styleUrl: './tarjeta.component.css'
})
export class TarjetaComponent {
  chistecito:any={}

  constructor (private test: TesteoService, private servidorcito:HttpClient){
    servidorcito.get("https://api.chucknorris.io/jokes/random").subscribe((respuesta)=>{
      this.chistecito= respuesta
      console.log(this.chistecito)
    })
  }
  saludar(){
    this.test.saludar()
  }
}
