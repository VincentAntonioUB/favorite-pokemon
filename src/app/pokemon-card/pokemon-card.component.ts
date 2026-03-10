import { Component, input } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {

  pokemon = input<any>();
  region = input<string>('');

}