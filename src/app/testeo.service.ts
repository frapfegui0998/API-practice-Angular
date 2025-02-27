import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TesteoService {

  constructor() { }
  saludar(){
    console.log("Hola estoy saludando")
  }
}
