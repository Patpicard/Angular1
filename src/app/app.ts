import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Título cambiado');
  protected  variable =  signal("->Esta es la variable<---");

    //  EL CAMBIO: Usamos el constructor o ngOnInit
  //  El instructivo no dice nada, si usar botón o cuando así que lo pongo acá
  constructor() {
    // Primero un Delay
     
    setTimeout(() => {
      console.log("Cambiando valor...");
      
      this.variable.set("->Este es el cambio en la variable<---");
      

    }, 12000); // Tiempo para capturar la pantallang
  }
}
