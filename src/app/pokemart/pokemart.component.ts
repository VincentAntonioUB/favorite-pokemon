import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { PokemonService } from '../pokemon-service.service';
@Component({
  selector: 'app-pokemart',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './pokemart.component.html',
  styleUrls: ['./pokemart.component.css']
})
export class PokemartComponent {

  service = inject(PokemonService);

}