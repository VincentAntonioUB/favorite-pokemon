import { Component, inject } from '@angular/core';
import { PokemonService } from '../pokemon-service.service';
@Component({
  selector: 'app-pokemart',
  standalone: true,
  templateUrl: './pokemart.component.html',
  styleUrls: ['./pokemart.component.css']
})
export class PokemartComponent {

  service = inject(PokemonService);

}